import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SubjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StudentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SchoolsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeacherMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Subject {
  readonly id: string;
  readonly subject_name?: string;
  readonly subject_marks?: string;
  readonly details?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Subject, SubjectMetaData>);
  static copyOf(source: Subject, mutator: (draft: MutableModel<Subject, SubjectMetaData>) => MutableModel<Subject, SubjectMetaData> | void): Subject;
}

export declare class Class {
  readonly id: string;
  readonly year?: string;
  readonly subject_id?: string;
  readonly class_name?: string;
  readonly dept_name?: string;
  readonly shift?: string;
  readonly Student?: Student;
  readonly Teachers?: (Teacher | null)[];
  readonly details?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly classStudentId?: string;
  constructor(init: ModelInit<Class, ClassMetaData>);
  static copyOf(source: Class, mutator: (draft: MutableModel<Class, ClassMetaData>) => MutableModel<Class, ClassMetaData> | void): Class;
}

export declare class Student {
  readonly id: string;
  readonly year?: string;
  readonly enroll_date?: string;
  readonly class?: string;
  readonly enroll_fee?: string;
  readonly first_name?: string;
  readonly middle_name?: string;
  readonly last_name?: string;
  readonly father_name?: string;
  readonly mother_name?: string;
  readonly dob?: string;
  readonly religion?: string;
  readonly email?: string;
  readonly mobile?: string;
  readonly Schools?: Schools;
  readonly details?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly studentSchoolsId?: string;
  constructor(init: ModelInit<Student, StudentMetaData>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student, StudentMetaData>) => MutableModel<Student, StudentMetaData> | void): Student;
}

export declare class Schools {
  readonly id: string;
  readonly addrs_id?: string;
  readonly school_name?: string;
  readonly school_principal?: string;
  readonly other?: string;
  readonly details?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Schools, SchoolsMetaData>);
  static copyOf(source: Schools, mutator: (draft: MutableModel<Schools, SchoolsMetaData>) => MutableModel<Schools, SchoolsMetaData> | void): Schools;
}

export declare class Teacher {
  readonly id: string;
  readonly joining_date?: string;
  readonly year?: string;
  readonly first_name?: string;
  readonly middle_name?: string;
  readonly last_name?: string;
  readonly dob?: string;
  readonly religion?: string;
  readonly email?: string;
  readonly mobile?: string;
  readonly Schools?: Schools;
  readonly classID: string;
  readonly details?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly teacherSchoolsId?: string;
  constructor(init: ModelInit<Teacher, TeacherMetaData>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher, TeacherMetaData>) => MutableModel<Teacher, TeacherMetaData> | void): Teacher;
}