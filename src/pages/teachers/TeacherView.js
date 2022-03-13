import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Typography } from "../../components/Wrappers/Wrappers";
import useStyles from "../typography/styles.js";
import { Box, Grid } from "@material-ui/core";
import { mapToEmployee } from "../employee-form/nameToLabel";
import { useHistory } from "react-router-dom";
import { getTeacher } from "../employee-form/employeeUtils";
import CircularProgress from "@mui/material/CircularProgress";

export default function TeacherView({ ...props }) {
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const data = mapToEmployee(props.employee_data);
  const history = useHistory();
  console.log(data);
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
    props.setView(false);
  };
  const handleEdit = async () => {
    setLoading(true);

    const employee = await getTeacher(props.employee_data.id);
    console.log("ep in edit: ", employee);
    history.push({
      pathname: "/app/employee-form",
      state: {
        editMode: true,
        id: props.employee_data.id,
        employee: {
          ...employee,
          role_name: employee?.role?.items
            ? employee?.role?.items[0]?.name
            : "",
          role_type: employee?.role?.items
            ? employee?.role?.items[0]?.type
            : "",
          role_payBand: employee?.role?.items
            ? employee?.role?.items[0]?.payBand
            : "",
          comp_type: employee?.compensation?.type,
          comp_amount: employee?.compensation?.amount,
          comp_isTaxable: employee?.compensation?.isTaxable,
        },
      },
    });
    setLoading(false);
    setOpen(false);
    props.setView(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        aria-labelledby="teacher-view-dialog"
        aria-describedby="teacher-view-dialog-description"
      >
        <DialogTitle id="teacher-view-dialog">Teacher</DialogTitle>
        <DialogContent style={{ overflow: "hidden" }}>
          <List
            sx={{
              width: "100%",
              maxWidth: 850,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 500,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {Object.entries(data).map((section) => (
              <li key="Personal">
                <ul>
                  <ListSubheader>
                    <Typography
                      color="primary"
                      variant="h5"
                      className={classes.text}
                    >
                      {section[0]}
                    </Typography>
                  </ListSubheader>
                  {Object.entries(section[1]).map((item) => (
                    <ListItem key="first_name">
                      <ListItemText
                        primary={
                          <>
                            <Box maxWidth={500}>
                              <Grid
                                container
                                spacing={0.5}
                                justify="flex-start"
                              >
                                <Grid item xs={6}>
                                  <Typography
                                    className={classes.text}
                                    weight="bold"
                                  >
                                    {item[0]}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography
                                    className={classes.text}
                                    weight="light"
                                  >
                                    {item[1]}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            startIcon={loading ? <CircularProgress size="1rem" /> : null}
            onClick={handleEdit}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
