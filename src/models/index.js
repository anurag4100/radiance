// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Subject, Class, Student, Address, Schools, Employee, Role, Compensation } = initSchema(schema);

export {
  Subject,
  Class,
  Student,
  Address,
  Schools,
  Employee,
  Role,
  Compensation
};