import { createEmployee,createRole,createCompensation } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

export const addTeacher = async (data) => {
    console.log(JSON.stringify(data));
    console.log("Starting addTeacher");
    const compensation = await addCompensation(data);
    const employee = await API.graphql(graphqlOperation(createEmployee, {
      input: {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.middle_name,
        email: data.email,
        mobile: data.mobile,
        dob: data?.dob,
        schoolsEmployeesId: "5301f115-1c06-4189-9fbd-237fcbb403ac",
        joining_date: data?.joining_date,
        employeeCompensationId : compensation?.data?.createCompensation?.id
      }
    }));
    console.log("addEmployee complete: ", JSON.stringify(employee));
    //role is one-to-many relationship so employee id needs to be linked to role
     await addRole(data,employee?.data?.createEmployee?.id);
    return employee;
};

export const addRole = async (data, employeeId) => {
  console.log(JSON.stringify(data));
  console.log("Starting addRole");
  const result = await API.graphql(graphqlOperation(createRole, {
    input: {
      name: data.role_name,
      type: data.role_type,
      payBand: data.role_payBand,
      employeeRoleId : employeeId
    }
  }));
  console.log("addRole complete: ", JSON.stringify(result)); 
  return result;
}

export const addCompensation = async (data) => {
  console.log(JSON.stringify(data));
  console.log("Starting addCompensation");
  const result = await API.graphql(graphqlOperation(createCompensation, {
    input: {
      type: data.comp_type,
      amount: parseFloat(data.comp_amount),
      isTaxable: data.comp_isTaxable
    }
  }));
  console.log("addCompensation complete: ", JSON.stringify(result)); 
  return result;
}