/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject {
    onCreateSubject {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject {
    onUpdateSubject {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject {
    onDeleteSubject {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher {
    onUpdateTeacher {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher {
    onDeleteTeacher {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateSchools = /* GraphQL */ `
  subscription OnCreateSchools {
    onCreateSchools {
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
export const onUpdateSchools = /* GraphQL */ `
  subscription OnUpdateSchools {
    onUpdateSchools {
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
export const onDeleteSchools = /* GraphQL */ `
  subscription OnDeleteSchools {
    onDeleteSchools {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
