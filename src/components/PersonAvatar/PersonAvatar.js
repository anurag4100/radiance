import { Typography } from "../Wrappers/Wrappers";
import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";

export default function PersonAvatar({ color = "primary", ...props }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl("static");
  });

  return (
    <Grid container alignItems="center" spacing={1} justify="center">
      <Grid item xs={3}>
        <Avatar src={url} alt={props.name} />
      </Grid>
      <Grid item xs={9}>
        <Typography>{props.name}</Typography>
      </Grid>
    </Grid>
  );
}
