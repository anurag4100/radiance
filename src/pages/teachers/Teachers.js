import React,{useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";
import { API, graphqlOperation } from 'aws-amplify';
import { listEmployees } from '../.././graphql/queries'
// data
import mock from "../dashboard/mock";

const datatableData = [
  ["1","Joe James", "01/02/2003", "9896545655"],
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Teachers() {
  const classes = useStyles();
  
  var [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        console.log("Fetching Teachers...")
        const data = await API.graphql(graphqlOperation(listEmployees)) ;
        console.log(data);
        return data;
      };
      fetchData().then(res => setTeachers(res?.data?.listEmployees)).catch(console.error);
      console.log("Final Teachers");
      console.log(teachers.items);
      
  }, []);
  return (
    <>
      <PageTitle title="Teachers" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
        {
            teachers.items &&
              <MUIDataTable
              title="Teachers List"
              data={teachers.items && teachers.items.map(function (item) {
                return {
                  id:item.teacher_id,
                  name: item.first_name.concat(" "+item.last_name), 
                  date: item.enroll_date,
                  mobile: item.mobile
                }
              }).map(op => Object.values(op))}
              columns={["Teacher ID", "Name", "Joining Date", "Mobile"]}
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
