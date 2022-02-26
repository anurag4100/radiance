import * as React from 'react';
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@material-ui/core";
import {useForm} from "react-hook-form";
import { FormInputText } from '../Form/FormInputText';

export default function StudentForm() {
  const [open, setOpen] = React.useState(false);
  const {register, handleSubmit,control} = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const actions = [
    
  ];
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Student
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill below form to add a new student.
          </DialogContentText>
          <FormInputText name="first_name" control={control} label="First Name" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit((data) => alert(JSON.stringify(data)))}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
