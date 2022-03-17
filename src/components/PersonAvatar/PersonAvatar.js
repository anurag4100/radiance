import { Typography } from "../Wrappers/Wrappers";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { getAvatar } from "../../pages/employee-form/employeeUtils";

export default function PersonAvatar({ color = "primary", ...props }) {
  const [url, setUrl] = useState("dud");

  useEffect(() => {
    console.log("Image key: ", props.image_key);
    if (props.image_key) {
      getAvatar(props.image_key).then((res) => setUrl(res));
    }
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
