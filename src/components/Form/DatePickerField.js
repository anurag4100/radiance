import {useField, useFormikContext} from "formik";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from "@material-ui/pickers";
  import DateFnsUtils from "@date-io/date-fns";
export const DatePickerField = ({
    ...props
}) => {
    const {setFieldValue} = useFormikContext();
    const [field] = useField(props);
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker inputVariant="outlined" format="dd/MM/yyyy"
                KeyboardButtonProps={
                    {"aria-label": "change date"}
                }
                {...field}
                {...props}
                selected={(props.field.value && new Date(props.field.value)) || null}
                onChange={
                    function (MaterialUiPickersDate, value) {
                        setFieldValue(props.field.name, value)
                    }
                }
                autoOk = {true}
                value={props.field.value}/>
        </MuiPickersUtilsProvider>
    );
};
