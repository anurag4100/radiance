// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Subject, Class, Teacher, Student, Schools } = initSchema(schema);

export {
  Subject,
  Class,
  Teacher,
  Student,
  Schools
};