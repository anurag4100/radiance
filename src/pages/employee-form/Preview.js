import {useField, useFormikContext} from "formik";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
export const Preview = ({
    ...props
}) => {
    const {setFieldValue} = useFormikContext();
    const [field] = useField(props);
    console.log("props:",JSON.stringify(props))
    return (
        <TableContainer component={Paper}>
              <Table  size="small" aria-label="a dense table">
                <TableBody>
                  <TableRow>
                      <TableCell align="left">{props.form.values.first_name}</TableCell>
                      <TableCell align="left">{props.form.values.dob}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
    );
};
