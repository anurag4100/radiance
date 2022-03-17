import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Typography } from "../../components/Wrappers/Wrappers";
import useStyles from "../typography/styles.js";
import { Box, Grid } from "@material-ui/core";
import { mapToEmployee } from "./nameToLabel";
import Avatar from "@mui/material/Avatar";
import { getAvatar } from "./employeeUtils";

export default function EmployeePreview({ ...props }) {
  const [avatarUrl, setAvatarUrl] = useState(
    "https://schoolerpobjectstore72345-staging.s3.us-east-2.amazonaws.com/public/41d48a7c-b892-4187-ada9-c5848a4fb437v3_0459657.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAT323MQ4HA4H2E2W6%2F20220315%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220315T154026Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLWVhc3QtMiJGMEQCIA9VNQuV3CAOWA6BmsQ%2BAgJ9oJaT136EFkcqXalqG%2FN%2FAiBe0mfmh%2BJO3vt3IfJehd89TF5%2Bk3f%2F%2BzbsZQoMJd032SqRBgh5EAAaDDI2NTk0Mjc2MzI3OCIMafCZ8eG6XkbPi%2BM6Ku4Fr40t0iZlBWj6q6RbWgluxjaXZuNf0aVyo6bv0Yy7U6gK9S7cEaFde6x1T47lScRNer5jv1CBsZ44mGgHqxLJ8rykBPfHgNO3qHodsU0Wl%2Bn1hauWIyYF%2FgxgCqm%2FvHsts4jMR21UfQ8Dr9F4ykQe7CO8QEAjOpQGof1nE9l7QY92CEjypr1taoARtRfllvsm6LLYPLQgm%2FT2Q9pxPEAVqU%2BsFu8JQik2TX9kkhVczPUeP9PTfdHSGk4lVualQT9QgGHTv4eZ5u1rAd2821%2BmRa2qBqEibg%2BVaOq9hKfWsIU%2BMUZXwD8EOLZ1uDM%2BnNVhWWbB1YAzGx57PbVmNpEuGPH0Itckqi75H0LXvIAtXqYQjub4S8mOoXmQHcfFuT7NyWGl8EAswYDfInprdmB9yMvOH0XZA0M%2Bt8sUioG5HV5yhr%2FKecb3phC6lTW0kDJXwZNAG%2FjSQ6UEBUtSTVW%2B7yY7Ty%2FMAF0q%2BtHROrNp2Cio9OvMbPJK%2BMCEW3DOLvJhFWiLACXHV2zpzPZ2FPOskt2NSHPk1jXNE0sj2x8szF88hQbwJZlA%2BUe6%2Bde%2FiPj3vPjIj3uAu9hC%2BSQP%2FTvyNZk7DsCy9zkeiP30w2WLtK7caP%2FcX2WiKs7x6VvTnbMjkLEFgzqEYFSAbqk5d49uDZzG3Ot7kc8fvIwTeONElszpuBBMO6phR81P1wl5VD9msgYkMe7aNi47QErDAoiGaXDcRbeMk0NLG%2B%2FvhQuuv28i9Qq19hLhJxQrfNCAde8S3O55KokggbOt4J20bUeilZL5HJKZ%2FNAKdfEzpDXB1MWeWkiregO9%2FRKpkHPRNsfjLC0p4mUZVPq46Ud4EX8%2Fpdf9k6khSl95doYJgIDZFM3K5ao7WptMiTowLsnRiogd4WuwMLxqKw2vTMoC33Ka%2BLU%2Fp8v88hqw%2Bz5Vx7LGcR5u1JDNNM3vAc38zOaEpRjpf2wLBz0zABH%2BcX88jdsRAGClz6W%2FUsAK6at6SwyNMMnmwpEGOogC%2FQdOfLiue142k7EH%2FPiFWMctQRRaBiJK6BLsT7gmrnB77mpglK7Jp2kEyMbwR3y0heBwJThL2pW2x1SfUmljGht56xTOba%2FsYWUZs9EAJVfXyQKndYx8KAIK7SoP0w3PZOarbm%2B5cmBsCWgK06RD5Epaaas1OgshPADbmZ8WSxfGS2jGqYeZh4ERDKKH5%2FICNQxOeoHzTj4EWv46RfKTbwaMfGeFh7sPOzwJwj6Kft6d%2BQ8fYlaFpEpzLCx18DrwCrjnUUshC5%2BnQEAM2gWibaJZFx8Mq0UGyD7uezt2TJ2TqgvHdRFgeMWjozLW2g7OQE7Vatf2IukkzDK00URSM5uq0m4302RL&X-Amz-Signature=43d195db21a1c0ff0c46ece1d613fb75f5c6c353d9f140bf9f78398dbfd36fd5&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FWindows%2FNT_10.0%20lang%2Fjs%20md%2Fbrowser%2FChrome_99.0.4844.51%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.3.13_js&x-id=GetObject",
  );
  const [data, setData] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    setData(mapToEmployee(props.form.values));
    console.log(data);
    console.log("docs:", props.form.values.documents);

    getAvatar(props.form.values.image_key).then((res) => setAvatarUrl(res));
  }, []);
  return (
    <>
      <Box paddingLeft={50}>
        <Avatar src={avatarUrl.toString()} sx={{ width: 100, height: 100 }} />
      </Box>
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
          <li key={section[0]}>
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
                <ListItem key={item[0]}>
                  <ListItemText
                    primary={
                      <>
                        <Box maxWidth={250}>
                          <Grid container spacing={0.5} justify="flex-start">
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
    </>
  );
}
