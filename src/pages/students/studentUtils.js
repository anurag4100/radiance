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
import { getStudent } from "../../graphql/queries";
import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

export const fetchStudent = async (studentId) => {
  console.log("getStudent...");
  const res = await API.graphql(
    graphqlOperation(getStudent, {
      id: studentId,
    }),
  );
  console.log("getStudent complete: ", res?.data?.getStudent);
  return res?.data?.getStudent;
};
