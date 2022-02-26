import * as React from 'react';
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,MenuItem } from "@material-ui/core";
import {useForm} from "react-hook-form";
import { FormInputText } from '../Form/FormInputText';
import { FormInputDropdown } from '../Form/FormInputDropdown';
import { FormInputDate } from '../Form/FormInputDate';
import { createStudent } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

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
  const classOptions = [
    {
      label: "Class I",
      value: "1",
    },
    {
      label: "Class II",
      value: "2",
    },
    {
      label: "Class III",
      value: "3",
    },
    {
      label: "Class IV",
      value: "4",
    },
    {
      label: "Class V",
      value: "5",
    },
    {
      label: "Class VI",
      value: "6",
    },
    {
      label: "Class VII",
      value: "7",
    },
    {
      label: "Class VIII",
      value: "8",
    },
    {
      label: "Class IX",
      value: "9",
    },
    {
      label: "Class X",
      value: "10",
    },
    {
      label: "Class XI",
      value: "11",
    },
    {
      label: "Class XII",
      value: "12",
    },
  ];

  const religionOptions = [
    {
      label: "Hindu",
      value: "Hindu",
    },
    {
      label: "Muslim",
      value: "Muslim",
    },
    {
      label: "Christian",
      value: "Christian",
    },
    {
      label: "Sikhism",
      value: "Sikhism",
    },
    {
      label: "Jainism",
      value: "Jainism",
    },
    {
      label: "Buddhism",
      value: "Buddhism",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  const generateOptions = (options) => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };
  const pushToCloud = async(data) => {
    try {
      console.log(JSON.stringify(data));
      console.log("Starting createStudent")
      await API.graphql(graphqlOperation(createStudent, {input: {
        ...data,
        "dob": data.dob.toISOString().split('T')[0],
        "school_id": 18,
        "student_id": Math.floor(Math.random() * 101),
        "enroll_date" : new Date().toISOString().split('T')[0]
      }})) 
      console.log("addSchools complete.")
      
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Student
      </Button>
      <Dialog open={open}>
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill below form to add a new student.
          </DialogContentText>
          <FormInputText name="first_name" control={control} label="First Name" />
          <FormInputText name="middle_name" control={control} label="Middle Name" />
          <FormInputText name="last_name" control={control} label="Last Name" />
          <FormInputDate name="dob" control={control} label="Date of Birth" />
          <FormInputDropdown
            name="class_id"
            control={control}
            label="Class"
            data={generateOptions(classOptions)}
          />
          <FormInputText name="enroll_fee" control={control} label="Enroll Fees" />
          <FormInputText name="father_name" control={control} label="Father's Name" />
          <FormInputText name="mother_name" control={control} label="Mother's Name" />
          <FormInputDropdown
            name="religion"
            control={control}
            label="Religion"
            data = {generateOptions(religionOptions)}
          />
          <FormInputText name="email" control={control} label="Email" />
          <FormInputText name="mobile" control={control} label="Mobile" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(async (data) => {await pushToCloud(data).then;})}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
