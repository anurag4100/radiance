import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SchoolsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Schools {
  readonly id: string;
  readonly addrs_id?: string;
  readonly school_name?: string;
  readonly school_principal?: string;
  readonly other?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Schools, SchoolsMetaData>);
  static copyOf(source: Schools, mutator: (draft: MutableModel<Schools, SchoolsMetaData>) => MutableModel<Schools, SchoolsMetaData> | void): Schools;
}