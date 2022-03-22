import {
  createEmployee,
  createRole,
  createCompensation,
  createAddress,
  updateEmployee,
  updateCompensation,
  updateRole,
} from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { getEmployee } from "../.././graphql/queries";
import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

export const addTeacher = async (data) => {
  console.log("Starting addTeacher");
  console.log(JSON.stringify(data));
  const compensation = await addCompensation(data);
  const address = await addAddress(data);
  const employee = await API.graphql(
    graphqlOperation(createEmployee, {
      input: {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        email: data.email,
        mobile: data.mobile,
        details: JSON.stringify({
          image_key: data?.image_key,
          documents: data?.documents,
        }),
        dob: data?.dob,
        schoolsEmployeesId: "5301f115-1c06-4189-9fbd-237fcbb403ac",
        joining_date: data?.joining_date,
        employeeCompensationId: compensation?.data?.createCompensation?.id,
        employeeAddressId: address?.data?.createAddress?.id,
      },
    }),
  );
  console.log("addEmployee complete: ", JSON.stringify(employee));
  // role is one-to-many relationship so employee id needs to be linked to role
  await addRole(data, employee?.data?.createEmployee?.id);
  return employee;
};

export const addRole = async (data, employeeId) => {
  console.log("Starting addRole");
  console.log(JSON.stringify(data));
  const result = await API.graphql(
    graphqlOperation(createRole, {
      input: {
        name: data.role_name,
        type: data.role_type,
        payBand: data.role_payBand,
        employeeRoleId: employeeId,
      },
    }),
  );
  console.log("addRole complete: ", JSON.stringify(result));
  return result;
};

export const addCompensation = async (data) => {
  console.log("Starting addCompensation");
  console.log(JSON.stringify(data));
  const result = await API.graphql(
    graphqlOperation(createCompensation, {
      input: {
        type: data.comp_type,
        amount: parseFloat(data.comp_amount),
        isTaxable: data.comp_isTaxable,
      },
    }),
  );
  console.log("addCompensation complete: ", JSON.stringify(result));
  return result;
};

export const editTeacher = async (data) => {
  console.log("Starting editTeacher");
  console.log(JSON.stringify(data));
  delete data._deleted;
  delete data._lastChangedAt;
  const employee = await API.graphql(
    graphqlOperation(updateEmployee, {
      input: {
        id: data.id,
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        email: data.email,
        mobile: data.mobile,
        details: JSON.stringify({
          image_key: data?.image_key,
          documents: data?.documents,
        }),
        dob: data?.dob,
        schoolsEmployeesId: data.schoolsEmployeesId,
        joining_date: data?.joining_date,
        _version: data._version,
      },
    }),
  );
  console.log("editEmployee complete: ", JSON.stringify(employee));
  await editRole(data, data.id);
  await editCompensation(data);
  return employee;
};

export const editRole = async (data, employeeId) => {
  console.log("Starting editRole");
  console.log(JSON.stringify(data));
  const result = null;
  try {
    result = await API.graphql(
      graphqlOperation(updateRole, {
        input: {
          id: data.id,
          name: data.role_name,
          type: data.role_type,
          payBand: data.role_payBand,
          employeeRoleId: employeeId,
          _version: data._version,
        },
      }),
    );
  } catch (err) {
    if (err?.errorType === "ConditionalCheckFailedException") {
      console.log("Role does not exists, adding new role...");
      result = await addRole(data, employeeId);
    }
  }

  console.log("editRole complete: ", JSON.stringify(result));
  return result;
};

export const editCompensation = async (data) => {
  console.log("Starting editCompensation");
  console.log(JSON.stringify(data));
  const result = null;
  try {
    result = await API.graphql(
      graphqlOperation(updateCompensation, {
        input: {
          id: data.employeeCompensationId,
          type: data.comp_type,
          amount: parseFloat(data.comp_amount),
          isTaxable: data.comp_isTaxable,
          _version: data?.compensation?._version,
        },
      }),
    );
  } catch (err) {
    if (err?.errorType === "ConditionalCheckFailedException") {
      console.log("Compensation does not exists, adding new compensation...");
      result = await addCompensation(data);
    }
  }

  console.log("editCompensation complete: ", JSON.stringify(result));
  return result;
};

export const getTeacher = async (employeeId) => {
  console.log("getTeacher...");
  const res = await API.graphql(
    graphqlOperation(getEmployee, {
      id: employeeId,
    }),
  );
  console.log("getTeacher complete: ", res?.data?.getEmployee);
  return res?.data?.getEmployee;
};

export const uploadFile = async (file) => {
  try {
    console.log("uploading file: ", file?.name);
    const result = await Storage.put(uuidv4() + file.name, file);
    console.log("file upload complete", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getAvatar = async (key) => {
  try {
    console.log("fetching avatar: ", key);
    const signedURL = await Storage.get(key);
    console.log("Avatar URL: ", signedURL);
    return signedURL;
  } catch (err) {
    console.log(err);
  }
};

export const addAddress = async (data) => {
  console.log("Starting addAddress");
  console.log(JSON.stringify(data));
  const result = await API.graphql(
    graphqlOperation(createAddress, {
      input: {
        line1: data.add_line1,
        line2: data.add_line2,
        line3: data.add_line3,
        city: data.add_city,
        district: data.add_district,
        state: data.add_state,
        country: data.country,
        zip: data.zip,
      },
    }),
  );
  console.log("addAddress complete: ", JSON.stringify(result));
  return result;
};
