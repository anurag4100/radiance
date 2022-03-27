import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";
import { API, graphqlOperation } from "aws-amplify";
import { deleteEmployee } from "../.././graphql/mutations";
import { employeesByCreatedDate } from "../.././graphql/queries";
// data
import mock from "../dashboard/mock";
import { useSnackbar } from "notistack";
import ConfirmDialog from "../../components/Form/ConfirmDialog";
import { Link } from "react-router-dom";
import TeacherView from "./TeacherView";
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
  var [teachers, setTeachers] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isView, setIsView] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState([]);
  const [viewIndex, setViewIndex] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    fetchTeachers();
  }, []);

  function fetchTeachers() {
    const fetchData = async () => {
      setLoading(true);
      console.log("Fetching Teachers...");
      const data = await API.graphql(
        graphqlOperation(employeesByCreatedDate, {
          schoolsEmployeesId: "5301f115-1c06-4189-9fbd-237fcbb403ac",
          sortDirection: "DESC",
        }),
      );
      setLoading(false);
      return data;
    };
    fetchData()
      .then((res) =>
        setTeachers(
          res?.data?.employeesByCreatedDate?.items?.filter(
            (item) => item._deleted !== true,
          ),
        ),
      )
      .catch(console.error);
    console.log("Retrieved Teachers.", teachers);
  }

  const confirm_delete = (data) => {
    setConfirmDelete(true);
    setTeacherToDelete(data);
    console.log("confirm:", confirmDelete);
  };
  function del_teacher(data) {
    const del_teach = async (stu) => {
      try {
        const result = await API.graphql(
          graphqlOperation(deleteEmployee, {
            input: { id: stu.id, _version: stu._version },
          }),
        );
        console.log(result);
        enqueueSnackbar("Teacher deleted successfully.", {
          variant: "success",
        });
        fetchTeachers();
        return result;
      } catch (err) {
        console.error("error: ", err);
        enqueueSnackbar("Error occured while deleting teacher!", {
          variant: "error",
        });
      }
    };
    del_teach(data);
  }

  const view_teacher = (rowData, rowMeta) => {
    history.push({
      pathname: `/app/employee/${teachers[rowMeta.dataIndex].id}`,
      state: {
        empId: teachers[rowMeta.dataIndex].id,
        image_key: JSON.parse(teachers[rowMeta.dataIndex]?.details)?.image_key,
      },
    });
  };
  return (
    <>
      <PageTitle
        title="Teachers"
        button={
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            component={Link}
            to="/app/employee-form/"
          >
            Add Teacher
          </Button>
        }
      />
      {confirmDelete && (
        <ConfirmDialog
          isOpen={confirmDelete}
          action={del_teacher}
          data={teacherToDelete}
          setConfirmDelete={setConfirmDelete}
        />
      )}
      {isView && (
        <TeacherView employee_data={teachers[viewIndex]} setView={setIsView} />
      )}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {loading ? (
            <TableSkeleton />
          ) : (
            <MUIDataTable
              title="Teachers List"
              data={teachers
                ?.map(function (item) {
                  return {
                    teacher: {
                      first_name: item.first_name,
                      last_name: item.last_name,
                      image_key: JSON.parse(item?.details)?.image_key,
                    },
                    email: item.email,
                    mobile: item.mobile,
                    date: formatDate(item.joining_date),
                    grade: item.mobile,
                  };
                })
                .map((op) => Object.values(op))}
              columns={[
                {
                  name: "Teacher",
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
                { name: "Joining Date" },
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
                  console.log(JSON.stringify(teachers[idsToDelete]));
                  //del_student(students[idsToDelete]);
                  confirm_delete(teachers[idsToDelete]);
                },
                onRowClick: (rowData, rowMeta) => {
                  console.log("data:", JSON.stringify(rowData));
                  console.log("meta:", JSON.stringify(rowMeta));
                  view_teacher(rowData, rowMeta);
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
