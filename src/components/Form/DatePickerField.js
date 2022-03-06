import React from "react";
import {useField, useFormikContext} from "formik";
import DatePicker from "react-datepicker";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
  } from "@material-ui/pickers";
  import DateFnsUtils from "@date-io/date-fns";
  import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
export const DatePickerField = ({
    ...props
}) => {
    const {setFieldValue} = useFormikContext();
    const [field] = useField(props);
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker inputVariant="outlined" format="MM/dd/yyyy"
                KeyboardButtonProps={
                    {"aria-label": "change date"}
                }
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={
                    function (MaterialUiPickersDate, value) {
                        console.log('Date: ',value);
                        setFieldValue(value)
                    }
                }
                onAccept = {function (date){
                    console.log('Accept:',date);
                    setFieldValue(field.name, date);
                }}
                value={field.name}/>
        </MuiPickersUtilsProvider>
    );
};
