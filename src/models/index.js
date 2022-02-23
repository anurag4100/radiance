// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Schools } = initSchema(schema);

export {
  Schools
};