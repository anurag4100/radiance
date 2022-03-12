import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Typography } from "../../components/Wrappers/Wrappers";
import useStyles from "../typography/styles.js";
import { Box,Grid } from '@material-ui/core';
import {mapToEmployee} from '../employee-form/nameToLabel';

export default function TeacherView({...props}) {
    const data = mapToEmployee(props.employee_data);
    console.log(data);
    const classes = useStyles();
    return (
      <List
        sx={{
          width: '100%',
          maxWidth: 850,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 500,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
         {Object.entries(data).map((section) => (
          <li key="Personal">
            <ul>
              <ListSubheader>
                <Typography color="primary" variant="h5" className={classes.text}>{section[0]}</Typography>
              </ListSubheader>
              {Object.entries(section[1]).map((item) => (
                <ListItem key="first_name">
                  <ListItemText primary={ 
                    <>
                    <Box maxWidth = {250} >
                    <Grid container spacing={0.5} justify="flex-start">
                      <Grid item xs={6} >
                        <Typography className={classes.text} weight="bold">
                          {item[0]} 
                        </Typography>  
                      </Grid> 
                      <Grid item xs={6} >
                        <Typography className={classes.text} weight="light" >
                          {item[1]}
                        </Typography>
                      </Grid>
                    </Grid>
                    </Box>
                    </>
                   } />
                </ListItem>
                ))}
            </ul>
          </li>
        ))}
      </List>
    );
}
