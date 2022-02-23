/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchools = /* GraphQL */ `
  mutation CreateSchools(
    $input: CreateSchoolsInput!
    $condition: ModelSchoolsConditionInput
  ) {
    createSchools(input: $input, condition: $condition) {
      id
      addrs_id
      school_name
      school_principal
      other
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSchools = /* GraphQL */ `
  mutation UpdateSchools(
    $input: UpdateSchoolsInput!
    $condition: ModelSchoolsConditionInput
  ) {
    updateSchools(input: $input, condition: $condition) {
      id
      addrs_id
      school_name
      school_principal
      other
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSchools = /* GraphQL */ `
  mutation DeleteSchools(
    $input: DeleteSchoolsInput!
    $condition: ModelSchoolsConditionInput
  ) {
    deleteSchools(input: $input, condition: $condition) {
      id
      addrs_id
      school_name
      school_principal
      other
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
