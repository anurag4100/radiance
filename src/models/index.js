// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Subject, Class, Student, Schools, Employee, Role, Compensation, Address } = initSchema(schema);

export {
  Subject,
  Class,
  Student,
  Schools,
  Employee,
  Role,
  Compensation,
  Address
};