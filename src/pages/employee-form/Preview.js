import {useField, useFormikContext} from "formik";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import {nameToLabel,mapToLabel} from './nameToLabel.js';
import { Typography } from "../../components/Wrappers";
import useStyles from "../typography/styles.js";
export const Preview = ({
    ...props
}) => {
    const {setFieldValue} = useFormikContext();
    const [field] = useField(props);
    const data = Object.entries(props.form.values);
    var classes = useStyles();
    return (
        <TableContainer component={Paper}>
              <Table  size="small" aria-label="a dense table">
                <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row[0]}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className={classes.tableRow}
                  >
                    <TableCell className={classes.tabelCell}></TableCell>
                    <TableCell component="th" scope="row" style={{width: 100,borderBottom:"none"}}>
                      <Typography className={classes.text} weight="bold">
                        {nameToLabel[row[0]]}
                      </Typography>
                    </TableCell>
                    <TableCell align="left" className={classes.tabelCell}>
                      <Typography className={classes.text} weight="light">
                        {row[1]}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
    );
};
