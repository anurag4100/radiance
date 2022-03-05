import * as React from 'react';
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,MenuItem } from "@material-ui/core";
import {useForm} from "react-hook-form";
import { FormInputText } from '../Form/FormInputText';
import { FormInputDropdown } from '../Form/FormInputDropdown';
import { FormInputDate } from '../Form/FormInputDate';
import { createStudent,updateStudent } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { useSnackbar } from 'notistack';

export default function StudentForm({stateChanger,viewMode,student_data, setView}) {
  const [open, setOpen] = React.useState(viewMode);
  const {register, handleSubmit,control} = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if(viewMode){
      setView(false)
    }
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
      if(viewMode){
        await editStudent(data);
      }else{
        await addStudent(data);
      }
      
    } catch (err) {
      console.log('error creating todo:', err)
      enqueueSnackbar('Error occured while adding student!',{ variant: 'error'})
    }
  };

  return (
    <div>
      {!viewMode && <Button color="secondary" variant="outlined" onClick={handleClickOpen}>
        Add Student
      </Button>}
      <Dialog open={open}>
        <DialogTitle>{viewMode ? 'View/Edit Student' : 'Add Student'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {viewMode ? "Change or edit existing student's detail.":"Please fill below form to add a new student."}
          </DialogContentText>
          <FormInputText name="first_name" control={control} label="First Name" defaultValue={student_data?.first_name}/>
          <FormInputText name="middle_name" control={control} label="Middle Name" defaultValue={student_data?.middle_name}/>
          <FormInputText name="last_name" control={control} label="Last Name" defaultValue={student_data?.last_name}/>
          <FormInputDate name="dob" control={control} label="Date of Birth" defaultValue={student_data?.dob}/>
          <FormInputDropdown
            name="class_id"
            control={control}
            label={viewMode ? classOptions?.find(o => o.value === student_data?.class_id?.toString())['label'] : "Class"}
            data={generateOptions(classOptions)}
            defaultValue={student_data?.class_id}
          />
          <FormInputText name="enroll_fee" control={control} label="Enroll Fees" defaultValue={student_data?.enroll_fee}/>
          <FormInputText name="father_name" control={control} label="Father's Name" defaultValue={student_data?.father_name}/>
          <FormInputText name="mother_name" control={control} label="Mother's Name" defaultValue={student_data?.mother_name}/>
          <FormInputDropdown
            name="religion"
            control={control}
            label={viewMode ? religionOptions?.find(o => o.value === student_data?.religion?.toString())['label']:"Religion"}
            data = {generateOptions(religionOptions)}
            defaultValue={student_data?.religion}
          />
          <FormInputText name="email" control={control} label="Email" defaultValue={student_data?.email}/>
          <FormInputText name="mobile" control={control} label="Mobile" defaultValue={student_data?.mobile}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(async (data) => {await pushToCloud(data)})}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  async function addStudent(data) {
    console.log(JSON.stringify(data));
    console.log("Starting createStudent");
    const result = await API.graphql(graphqlOperation(createStudent, {
      input: {
        ...data,
        "dob": data?.dob?.toISOString().split('T')[0],
        "schoolsStudentsId": "5301f115-1c06-4189-9fbd-237fcbb403ac",
        "student_id": Math.floor(Math.random() * 101),
        "enroll_date": new Date().toISOString().split('T')[0]
      }
    }));
    console.log("addSchools complete: ", JSON.stringify(result));
    enqueueSnackbar('Student added successfully.', { variant: 'success' });
    stateChanger();
    handleClose();
  }

  async function editStudent(data) {
    console.log(JSON.stringify(data));
    delete student_data._deleted;
    delete student_data._lastChangedAt;
    console.log("Starting updateStudent");
    const result = await API.graphql(graphqlOperation(updateStudent, {
      input: {
        ...student_data,
        ...data,
        "dob": data?.dob?.toISOString().split('T')[0]
      }
    }));
    console.log("updateSchools complete: ", JSON.stringify(result));
    enqueueSnackbar('Student updated successfully.', { variant: 'success' });
    stateChanger();
    handleClose();
  }
}

