// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Subject, Class, Teacher, Student, Schools, Employee, Address } = initSchema(schema);

export {
  Subject,
  Class,
  Teacher,
  Student,
  Schools,
  Employee,
  Address
};