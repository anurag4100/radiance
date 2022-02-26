/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
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
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
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
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
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
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
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
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createSchools = /* GraphQL */ `
  mutation CreateSchools(
    $input: CreateSchoolsInput!
    $condition: ModelSchoolsConditionInput
  ) {
    createSchools(input: $input, condition: $condition) {
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
export const updateSchools = /* GraphQL */ `
  mutation UpdateSchools(
    $input: UpdateSchoolsInput!
    $condition: ModelSchoolsConditionInput
  ) {
    updateSchools(input: $input, condition: $condition) {
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
export const deleteSchools = /* GraphQL */ `
  mutation DeleteSchools(
    $input: DeleteSchoolsInput!
    $condition: ModelSchoolsConditionInput
  ) {
    deleteSchools(input: $input, condition: $condition) {
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
