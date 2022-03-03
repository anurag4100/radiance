import React,{useState,useEffect} from "react";
import { Grid,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";
import { API, graphqlOperation } from 'aws-amplify';
import { createStudent, deleteStudent } from '../.././graphql/mutations';
import { studentsByCreatedDate } from '../.././graphql/queries'
// data
import mock from "../dashboard/mock";
import StudentForm from "../../components/StudentForm/StudentForm";
import { useSnackbar } from 'notistack';
import ConfirmDialog from "../../components/Form/ConfirmDialog";

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Students() {
  const classes = useStyles();
  var [students, setStudents] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isView,setIsView] = useState(false);
  const [confirmDelete,setConfirmDelete] = useState(true);
  const [viewIndex,setViewIndex] = useState([]);

  useEffect(() => {
    fetchStudents(setStudents, students);
  }, []);

  function fetchStudents() {
    const fetchData = async () => {
      console.log("Fetching Students...");
      const data = await API.graphql(graphqlOperation(studentsByCreatedDate, {
        school_id: 18,
        sortDirection: "DESC",
      }));
      return data;
    };
    fetchData().then(res => setStudents(res?.data?.studentsByCreatedDate?.items?.filter(item => item._deleted !== true))).catch(console.error);
    console.log("Retrieved Students.",students);
  }
  
  const confirm_delete = (data) => {
    setConfirmDelete(true);
    console.log("confirm:",confirmDelete);
  }
  function del_student (data) {
    const del_stu = async(stu) => {
      try{
        const result = await API.graphql(graphqlOperation(deleteStudent, {input: {id: stu.id, _version:stu._version}}))
        console.log(result);
        enqueueSnackbar('Student deleted successfully.',{ variant: 'success'})
        fetchStudents();
        return result;
      }catch (err){
        console.error("error: ",err);
        enqueueSnackbar('Error occured while deleting student!',{ variant: 'error'})
      }
    }
    del_stu(data);
    
  };

  const view_student = (rowData, rowMeta) => {
      setIsView(true);
      setViewIndex(rowMeta.dataIndex);
  }
  return (
    <>
      <PageTitle title="Students" modal = {<StudentForm stateChanger = {fetchStudents} viewMode = {false}/>}
      />
      {isView && <StudentForm stateChanger = {fetchStudents} viewMode = {true} student_data = {students[viewIndex]} setView= {setIsView}/>}
      {<ConfirmDialog isOpen= {confirmDelete} action = {del_student}/>}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {
            students &&
              <MUIDataTable
              title="Students List"
              data={students && students
                //?.filter(item => item._deleted !== true)
                ?.map(function (item) {
                return {
                  id:item.student_id,
                  name: item.first_name?.concat(" "+item.last_name), 
                  date: item.enroll_date,
                  mobile: item.mobile
                }
              }).map(op => Object.values(op))}
              columns={["Student ID", "Name", "Joining Date", "Mobile"]}
              options={{
                filterType: "checkbox",
                fixedHeader: true,
                onRowsDelete: (rowsDeleted) => {
                  console.log("To be deleted: ",JSON.stringify(rowsDeleted));
                  const idsToDelete = rowsDeleted?.data?.map (item => item.dataIndex)
                  console.log(JSON.stringify(students[idsToDelete]));
                  del_student(students[idsToDelete]);
                  //confirm_delete(students[idsToDelete]);
                },
                onRowClick : (rowData, rowMeta) => {
                  console.log("data:",JSON.stringify(rowData))
                  console.log("meta:",JSON.stringify(rowMeta))
                  view_student(rowData,rowMeta);
                }
              }}
              />
          }
        </Grid>
        
        <Grid item xs={12}>
          <Widget title="TBD" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            {false && <Table data={mock.table} />}
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

