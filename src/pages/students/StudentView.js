import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "../../components/Wrappers/Wrappers";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Slide,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Stack } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import { fetchStudent } from "./studentUtils";
import { getAvatar } from "../employee-form/employeeUtils";

export default function StudentView({ ...props }) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState("default");
  const history = useHistory();
  const { stuId } = useParams();
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }));
  const classes = useStyles();
  useEffect(() => {
    fetchStudent(stuId).then((res) => setData(res));
  }, []);
  const handleEdit = async () => {
    setLoading(true);
    console.log("ep in edit: ", data);
    history.push({
      pathname: "/app/employee-form",
      state: {
        editMode: true,
        id: data.id,
        employee: {
          ...data,
          role_name: data?.role?.items ? data?.role?.items[0]?.name : "",
          role_type: data?.role?.items ? data?.role?.items[0]?.type : "",
          role_payBand: data?.role?.items ? data?.role?.items[0]?.payBand : "",
          comp_type: data?.compensation?.type,
          comp_amount: data?.compensation?.amount,
          comp_isTaxable: data?.compensation?.isTaxable,
          add_line1: data?.address?.line1,
          add_line2: data?.address?.line2,
          add_line3: data?.address?.line3,
          add_city: data?.address?.city,
          add_district: data?.address?.district,
          add_state: data?.address?.state,
          add_zip: data?.address?.zip,
        },
      },
    });
    setLoading(false);
  };
  return (
    <>
      <PageTitle
        title="Profile"
        button={
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            component={Link}
            to="/app/employee-form/"
          >
            Edit Student
          </Button>
        }
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md="auto">
          <Card>
            <CardContent>
              <Grid container justify="center">
                <Avatar src={avatarUrl} className={classes.large} />
              </Grid>
              <Grid container justify="center">
                <Typography variant="h2">
                  {data.first_name + " " + data?.last_name}
                </Typography>
              </Grid>
              <Grid container justify="center">
                <Typography variant="h5">Asst. Teacher</Typography>
              </Grid>
              <Grid container justify="center">
                <Link color="primary">{data?.email}</Link>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md="auto">
          <Card>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} md="auto">
                  <Typography variant="h5" color="secondary">
                    Personal
                  </Typography>
                  <Box paddingTop={2}>
                    <Stack spacing={0.5}>
                      {label("First Name", data?.first_name)}
                      {label("Middle Name", data?.middle_name)}
                      {label("Mobile", data?.mobile)}
                      {label("Email", data?.email)}
                      {label("DOB", data?.dob)}
                      {label("DOJ", data?.joining_date)}
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Typography variant="h5" color="secondary">
                    Address
                  </Typography>
                  <Box paddingTop={2}>
                    <Stack spacing={1}>
                      <Grid container spacing={0.5} direcion="row">
                        <Grid item>
                          <Typography weight="light">
                            {data?.address?.line1 + ","}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography weight="light">
                            {data?.address?.line2 + ","}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography weight="light">
                            {data?.address?.line3}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography weight="bold">
                        {data?.address?.city}
                      </Typography>
                      <Typography weight="bold">North Flair</Typography>
                      <Typography weight="bold">
                        {data?.address?.state} - 453112
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md="auto">
          <Card>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} md="auto">
                  <Typography variant="h5" color="secondary">
                    Education
                  </Typography>
                  <Box paddingTop={2}>
                    <Stack spacing={0.5}>
                      {label("Highest Education", "B.Education")}
                      {label("SSC", "67.76%")}
                      {label("HSC", "78.98%")}
                      {label("University", "Ohio State Univ.")}
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md="auto">
          <Card>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} md="auto">
                  <Typography variant="h5" color="secondary">
                    Experience
                  </Typography>
                  <Box paddingTop={2}>
                    <Stack spacing={0.5}>
                      {label(
                        "Last Organization",
                        "Billabong Elementry school, Riverdale, OH",
                      )}
                      {label("Joining Date", "3/4/2017")}
                      {label("Years Spent", "5 years 1 Month")}
                      {label("Total Experience", "10 year 11 Months")}
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md="auto">
          <Card>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} md="auto">
                  <Typography variant="h5" color="secondary">
                    Role and Compensation
                  </Typography>
                  <Box paddingTop={2}>
                    <Stack spacing={0.5}>
                      {label("Current Role", "Asst. Teacher")}
                      {label("Payband", "1-Staff")}
                      {label("Compensation (Annual)", "$12455.55")}
                      {label("Previous Role", "N/A")}
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md="auto">
          <Card>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} md="auto">
                  <Typography variant="h5" color="secondary">
                    Documents
                  </Typography>
                  <Box paddingTop={2}>
                    <Stack spacing={0.5}>
                      <Link color="primary">{"SSN.pdf"}</Link>
                      <Link color="primary">{"Address verification.pdf"}</Link>
                      <Link color="primary">{"photo.jpg"}</Link>
                      <Link color="primary">
                        {"Experience Certificate.pdf"}
                      </Link>
                      <Link color="primary">{"B Ed degree.pdf"}</Link>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );

  function label(label, data) {
    return (
      <>
        <Typography weight="bold">
          {" "}
          <i>{label}</i>
        </Typography>
        <Typography>{data}</Typography>
      </>
    );
  }
}
