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
  const actions = [
    <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} type="submit">Save</Button>
    </DialogActions>
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
          <form action="/" method="POST" noValidate id="my-form-id" onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
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
          <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
            {actions}
          </div>
          </form>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
