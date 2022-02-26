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
      Student {
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
        studentSchoolsId
      }
      Teachers {
        nextToken
        startedAt
      }
      details
      year
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      classStudentId
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
        classStudentId
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
        classStudentId
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
      Schools {
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
      classID
      details
      teacher_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teacherSchoolsId
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
        classID
        details
        teacher_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teacherSchoolsId
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
        classID
        details
        teacher_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teacherSchoolsId
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
      Schools {
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
      details
      dob
      school_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentSchoolsId
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
        studentSchoolsId
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
        studentSchoolsId
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
