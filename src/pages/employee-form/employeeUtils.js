import { createEmployee } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

export const addTeacher = async (data) => {
    console.log(JSON.stringify(data));
    console.log("Starting addTeacher");
    const result = await API.graphql(graphqlOperation(createEmployee, {
      input: {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.middle_name,
        email: data.email,
        mobile: data.mobile,
        dob: data?.dob,
        schoolsEmployeesId: "5301f115-1c06-4189-9fbd-237fcbb403ac",
        joining_date: data?.joining_date,
        role : {
          name: data.role_name,
          type: data.role_type,
          payBand: data.role_payBand
        },
        compensation : {
          type: data.comp_type,
          amount: data.comp_amount,
          isTaxable: data.comp_isTaxable
        }

      }
    }));
    console.log("addEmployee complete: ", JSON.stringify(result));
};