// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Subject, Class, Student, Schools, Teacher } = initSchema(schema);

export {
  Subject,
  Class,
  Student,
  Schools,
  Teacher
};