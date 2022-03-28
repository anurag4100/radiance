import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";
import { API, graphqlOperation } from "aws-amplify";
import { deleteEmployee, deleteStudent } from "../.././graphql/mutations";
import { studentsByCreatedDate } from "../.././graphql/queries";
// data
import mock from "../dashboard/mock";
import { useSnackbar } from "notistack";
import ConfirmDialog from "../../components/Form/ConfirmDialog";
import { Link } from "react-router-dom";
import TableSkeleton from "../../components/Skeleton/TableSkeleton";
import PersonAvatar from "../../components/PersonAvatar/PersonAvatar";
import { formatDate } from "../../utils/dateUtils";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function Students() {
  const classes = useStyles();
  var [students, setStudents] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    fetchStudents();
  }, []);

  function fetchStudents() {
    const fetchData = async () => {
      setLoading(true);
      console.log("Fetching Students...");
      const data = await API.graphql(
        graphqlOperation(studentsByCreatedDate, {
          schoolsStudentsId: "5301f115-1c06-4189-9fbd-237fcbb403ac",
          sortDirection: "DESC",
        }),
      );
      setLoading(false);
      return data;
    };
    fetchData()
      .then((res) =>
        setStudents(
          res?.data?.studentsByCreatedDate?.items?.filter(
            (item) => item._deleted !== true,
          ),
        ),
      )
      .catch(console.error);
    console.log("Retrieved Students.", students);
  }

  const confirm_delete = (data) => {
    setConfirmDelete(true);
    setStudentToDelete(data);
    console.log("confirm:", confirmDelete);
  };
  function del_student(data) {
    const del_teach = async (stu) => {
      try {
        const result = await API.graphql(
          graphqlOperation(deleteStudent, {
            input: { id: stu.id, _version: stu._version },
          }),
        );
        console.log(result);
        enqueueSnackbar("Student deleted successfully.", {
          variant: "success",
        });
        fetchStudents();
        return result;
      } catch (err) {
        console.error("error: ", err);
        enqueueSnackbar("Error occured while deleting student!", {
          variant: "error",
        });
      }
    };
    del_teach(data);
  }

  const view_student = (rowData, rowMeta) => {
    history.push({
      pathname: `/app/student/${students[rowMeta.dataIndex].id}`,
      state: {
        empId: students[rowMeta.dataIndex].id,
        image_key: JSON.parse(students[rowMeta.dataIndex]?.details)?.image_key,
      },
    });
  };
  return (
    <>
      <PageTitle
        title="Students"
        button={
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            component={Link}
            to="/app/employee-form/"
          >
            Add Student
          </Button>
        }
      />
      {confirmDelete && (
        <ConfirmDialog
          isOpen={confirmDelete}
          action={del_student}
          data={studentToDelete}
          setConfirmDelete={setConfirmDelete}
        />
      )}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {loading ? (
            <TableSkeleton />
          ) : (
            <MUIDataTable
              title="Students List"
              data={students
                ?.map(function (item) {
                  return {
                    student: {
                      first_name: item.first_name,
                      last_name: item.last_name,
                      image_key: JSON.parse(item?.details)?.image_key,
                    },
                    email: item.email,
                    mobile: item.mobile,
                    date: formatDate(item.dob),
                    grade: item.mobile,
                  };
                })
                .map((op) => Object.values(op))}
              columns={[
                {
                  name: "Student",
                  options: {
                    customBodyRender: (value, tableMeta, updateValue) => (
                      <PersonAvatar
                        name={value.first_name + " " + value.last_name}
                        image_key={value?.image_key}
                      />
                    ),
                  },
                },
                { name: "Email" },
                { name: "Mobile" },
                { name: "DOB" },
                { name: "Grade" },
              ]}
              options={{
                filterType: "checkbox",
                fixedHeader: true,
                onRowsDelete: (rowsDeleted) => {
                  console.log("To be deleted: ", JSON.stringify(rowsDeleted));
                  const idsToDelete = rowsDeleted?.data?.map(
                    (item) => item.dataIndex,
                  );
                  console.log(JSON.stringify(students[idsToDelete]));
                  //del_student(students[idsToDelete]);
                  confirm_delete(students[idsToDelete]);
                },
                onRowClick: (rowData, rowMeta) => {
                  console.log("data:", JSON.stringify(rowData));
                  console.log("meta:", JSON.stringify(rowMeta));
                  view_student(rowData, rowMeta);
                },
              }}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <Widget
            title="TBD"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableOverflow}
          >
            {false && <Table data={mock.table} />}
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
