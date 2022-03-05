/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
      id
      subject_id
      subject_name
      details
      subject_marks
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject_id
        subject_name
        details
        subject_marks
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
export const syncSubjects = /* GraphQL */ `
  query SyncSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        subject_id
        subject_name
        details
        subject_marks
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
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      subject_id
      class_id
      class_name
      dept_name
      shift
      details
      year
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject_id
        class_id
        class_name
        dept_name
        shift
        details
        year
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
export const syncClasses = /* GraphQL */ `
  query SyncClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        subject_id
        class_id
        class_name
        dept_name
        shift
        details
        year
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
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
      joining_date
      year
      first_name
      middle_name
      last_name
      dob
      religion
      email
      mobile
      details
      teacher_id
      school_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        joining_date
        year
        first_name
        middle_name
        last_name
        dob
        religion
        email
        mobile
        details
        teacher_id
        school_id
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
export const syncTeachers = /* GraphQL */ `
  query SyncTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeachers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        joining_date
        year
        first_name
        middle_name
        last_name
        dob
        religion
        email
        mobile
        details
        teacher_id
        school_id
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
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      student_id
      enroll_date
      class_id
      enroll_fee
      first_name
      middle_name
      year
      father_name
      mother_name
      last_name
      religion
      email
      mobile
      details
      dob
      school_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        student_id
        enroll_date
        class_id
        enroll_fee
        first_name
        middle_name
        year
        father_name
        mother_name
        last_name
        religion
        email
        mobile
        details
        dob
        school_id
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
export const syncStudents = /* GraphQL */ `
  query SyncStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        student_id
        enroll_date
        class_id
        enroll_fee
        first_name
        middle_name
        year
        father_name
        mother_name
        last_name
        religion
        email
        mobile
        details
        dob
        school_id
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
export const studentsByCreatedDate = /* GraphQL */ `
  query StudentsByCreatedDate(
    $school_id: Int!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsByCreatedDate(
      school_id: $school_id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        student_id
        enroll_date
        class_id
        enroll_fee
        first_name
        middle_name
        year
        father_name
        mother_name
        last_name
        religion
        email
        mobile
        details
        dob
        school_id
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
export const getSchools = /* GraphQL */ `
  query GetSchools($id: ID!) {
    getSchools(id: $id) {
      id
      school_id
      name
      principal {
        id
        joining_date
        first_name
        middle_name
        last_name
        dob
        email
        mobile
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      details
      phone
      mobile
      email
      address {
        id
        line1
        line2
        line3
        city
        district
        state
        country
        zip
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      schoolsPrincipalId
      schoolsAddressId
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
        name
        details
        phone
        mobile
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        schoolsPrincipalId
        schoolsAddressId
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
        name
        details
        phone
        mobile
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        schoolsPrincipalId
        schoolsAddressId
      }
      nextToken
      startedAt
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      joining_date
      first_name
      middle_name
      last_name
      dob
      email
      mobile
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        joining_date
        first_name
        middle_name
        last_name
        dob
        email
        mobile
        details
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
export const syncEmployees = /* GraphQL */ `
  query SyncEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        joining_date
        first_name
        middle_name
        last_name
        dob
        email
        mobile
        details
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
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      line1
      line2
      line3
      city
      district
      state
      country
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        line1
        line2
        line3
        city
        district
        state
        country
        zip
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
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        line1
        line2
        line3
        city
        district
        state
        country
        zip
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
