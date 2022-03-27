import React from "react";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";
import { useHistory } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import { Button, Grid } from "@material-ui/core";

export default function PageTitle(props) {
  var classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant="h1" size="sm">
        {props.title}
      </Typography>
      <Grid container justify="flex-end" spacing={4}>
        <Grid item>
          {props.showBack && (
            <Button
              variant="contained"
              size="medium"
              color="secondary"
              onClick={() => history.goBack()}
              startIcon={<ArrowBack size="1rem" />}
            >
              Back
            </Button>
          )}
        </Grid>
        <Grid item>{props.button && props.button}</Grid>
      </Grid>
    </div>
  );
}
