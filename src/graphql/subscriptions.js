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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreateSchools = /* GraphQL */ `
  subscription OnCreateSchools {
    onCreateSchools {
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
export const onUpdateSchools = /* GraphQL */ `
  subscription OnUpdateSchools {
    onUpdateSchools {
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
export const onDeleteSchools = /* GraphQL */ `
  subscription OnDeleteSchools {
    onDeleteSchools {
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
