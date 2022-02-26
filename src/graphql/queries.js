/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchools = /* GraphQL */ `
  query GetSchools($id: ID!) {
    getSchools(id: $id) {
      id
      school_id
      school_name
      school_principal
      details
      phone
      mobile
      email
      addrs_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      school_id
      school_name
      school_principal
      details
      phone
      mobile
      email
      addrs_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSchools = /* GraphQL */ `
  query SyncSchools(
    $filter: ModelSchoolsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSchools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
      school_id
      school_name
      school_principal
      details
      phone
      mobile
      email
      addrs_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
