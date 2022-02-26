import * as React from 'react';
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@material-ui/core";
import {useForm} from "react-hook-form";

export default function StudentForm() {
  const [open, setOpen] = React.useState(false);
  const {register, handleSubmit} = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <form noValidate onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
            <TextField
              autoFocus
              margin="dense"
              inputRef={register('test')}
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
