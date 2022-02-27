import React,{useState,useEffect} from "react";
import { Grid,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";
import { API, graphqlOperation } from 'aws-amplify';
import { createStudent } from '../.././graphql/mutations';
import { studentsByCreatedDate } from '../.././graphql/queries'
// data
import mock from "../dashboard/mock";
import StudentForm from "../../components/StudentForm/StudentForm";


const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Students() {
  const classes = useStyles();
  var [students, setStudents] = useState([]);
  
  useEffect(() => {
    fetchStudents(setStudents, students);
  }, []);

  function fetchStudents() {
    const fetchData = async () => {
      console.log("Fetching Students...");
      const data = await API.graphql(graphqlOperation(studentsByCreatedDate, {
        school_id: 18,
        sortDirection: "DESC"
      }));
      return data;
    };
    fetchData().then(res => setStudents(res?.data?.studentsByCreatedDate)).catch(console.error);
    console.log("Retrieved Students:",JSON.stringify(students.items));
  }
  
  return (
    <>
      <PageTitle title="Students" modal = {<StudentForm stateChanger = {fetchStudents}/>}
      />
      
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {
            students.items &&
              <MUIDataTable
              title="Students List"
              data={students.items && students.items.map(function (item) {
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
                fixedHeader: true
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

