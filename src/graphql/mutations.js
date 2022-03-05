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
      details
      dob
      school_id
      schoolsStudentsId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      details
      dob
      school_id
      schoolsStudentsId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      details
      dob
      school_id
      schoolsStudentsId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        schoolsEmployeesId
        employeeCompensationId
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
      students {
        nextToken
        startedAt
      }
      employees {
        nextToken
        startedAt
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
export const updateSchools = /* GraphQL */ `
  mutation UpdateSchools(
    $input: UpdateSchoolsInput!
    $condition: ModelSchoolsConditionInput
  ) {
    updateSchools(input: $input, condition: $condition) {
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
        schoolsEmployeesId
        employeeCompensationId
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
      students {
        nextToken
        startedAt
      }
      employees {
        nextToken
        startedAt
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
export const deleteSchools = /* GraphQL */ `
  mutation DeleteSchools(
    $input: DeleteSchoolsInput!
    $condition: ModelSchoolsConditionInput
  ) {
    deleteSchools(input: $input, condition: $condition) {
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
        schoolsEmployeesId
        employeeCompensationId
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
      students {
        nextToken
        startedAt
      }
      employees {
        nextToken
        startedAt
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      joining_date
      first_name
      middle_name
      last_name
      dob
      email
      mobile
      details
      role {
        nextToken
        startedAt
      }
      compensation {
        id
        type
        amount
        isTaxable
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
      schoolsEmployeesId
      employeeCompensationId
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      joining_date
      first_name
      middle_name
      last_name
      dob
      email
      mobile
      details
      role {
        nextToken
        startedAt
      }
      compensation {
        id
        type
        amount
        isTaxable
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
      schoolsEmployeesId
      employeeCompensationId
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      joining_date
      first_name
      middle_name
      last_name
      dob
      email
      mobile
      details
      role {
        nextToken
        startedAt
      }
      compensation {
        id
        type
        amount
        isTaxable
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
      schoolsEmployeesId
      employeeCompensationId
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      name
      type
      payBand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employeeRoleId
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      name
      type
      payBand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employeeRoleId
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      name
      type
      payBand
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employeeRoleId
    }
  }
`;
export const createCompensation = /* GraphQL */ `
  mutation CreateCompensation(
    $input: CreateCompensationInput!
    $condition: ModelCompensationConditionInput
  ) {
    createCompensation(input: $input, condition: $condition) {
      id
      type
      amount
      isTaxable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCompensation = /* GraphQL */ `
  mutation UpdateCompensation(
    $input: UpdateCompensationInput!
    $condition: ModelCompensationConditionInput
  ) {
    updateCompensation(input: $input, condition: $condition) {
      id
      type
      amount
      isTaxable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCompensation = /* GraphQL */ `
  mutation DeleteCompensation(
    $input: DeleteCompensationInput!
    $condition: ModelCompensationConditionInput
  ) {
    deleteCompensation(input: $input, condition: $condition) {
      id
      type
      amount
      isTaxable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
