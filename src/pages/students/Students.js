import React,{useState,useEffect} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";
import { API, graphqlOperation } from 'aws-amplify';
import { createSchools } from '../.././graphql/mutations';
import { listSchools } from '../.././graphql/queries'
// data
import mock from "../dashboard/mock";

const datatableData = [
  ["1","Munna Chaubey",  "01/02/2022", "986547896"],
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Students() {
  const classes = useStyles();
  var [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        console.log("Fetching schools...")
        const data = await API.graphql(graphqlOperation(listSchools)) ;
        console.log(data);
        return data;
      };
      fetchData().then(res => setStudents(res?.data?.listSchools)).catch(console.error);
      console.log("Final schools");
      console.log(students.items);
  }, []);
  return (
    <>
      <PageTitle title="Students" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Students List"
            data={datatableData}
            columns={["Student ID", "Name", "Joining Date", "Mobile"]}
            options={{
              filterType: "checkbox",
            }}
          />
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
