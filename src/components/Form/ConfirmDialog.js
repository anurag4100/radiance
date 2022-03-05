import * as React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
  } from '@material-ui/core';
  import { Close } from '@material-ui/icons';
  


  const ConfirmDialog = ({isOpen,action,data,setConfirmDelete}) => {
    const [open, setOpen] = React.useState(isOpen);
    const handleClose = () => {
        setOpen(false);
        setConfirmDelete(false)
      };
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleSubmit = () => {
        action(data);
        handleClose();
        setConfirmDelete(false)
      }
    return (
      <Dialog open={open} maxWidth="sm" fullWidth onClose={handleClose}>
        <DialogTitle>Confirm delete</DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography>Are you sure you want to delete this student?</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick = {handleClose}>
            Cancel
          </Button>
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDialog;
  