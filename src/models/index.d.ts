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
  readonly subject_id?: number;
  readonly subject_name?: string;
  readonly details?: string;
  readonly subject_marks?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Subject, SubjectMetaData>);
  static copyOf(source: Subject, mutator: (draft: MutableModel<Subject, SubjectMetaData>) => MutableModel<Subject, SubjectMetaData> | void): Subject;
}

export declare class Class {
  readonly id: string;
  readonly subject_id?: number;
  readonly class_id?: number;
  readonly class_name?: string;
  readonly dept_name?: string;
  readonly shift?: string;
  readonly Student?: Student;
  readonly Teachers?: (Teacher | null)[];
  readonly details?: string;
  readonly year?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly classStudentId?: string;
  constructor(init: ModelInit<Class, ClassMetaData>);
  static copyOf(source: Class, mutator: (draft: MutableModel<Class, ClassMetaData>) => MutableModel<Class, ClassMetaData> | void): Class;
}

export declare class Student {
  readonly id: string;
  readonly student_id?: number;
  readonly enroll_date?: string;
  readonly class_id?: number;
  readonly enroll_fee?: number;
  readonly first_name?: string;
  readonly middle_name?: string;
  readonly year?: number;
  readonly father_name?: string;
  readonly mother_name?: string;
  readonly last_name?: string;
  readonly religion?: string;
  readonly email?: string;
  readonly mobile?: string;
  readonly Schools?: Schools;
  readonly details?: string;
  readonly dob?: string;
  readonly school_id?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly studentSchoolsId?: string;
  constructor(init: ModelInit<Student, StudentMetaData>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student, StudentMetaData>) => MutableModel<Student, StudentMetaData> | void): Student;
}

export declare class Schools {
  readonly id: string;
  readonly school_id?: number;
  readonly school_name?: string;
  readonly school_principal?: string;
  readonly details?: string;
  readonly phone?: string;
  readonly mobile?: string;
  readonly email?: string;
  readonly addrs_id?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Schools, SchoolsMetaData>);
  static copyOf(source: Schools, mutator: (draft: MutableModel<Schools, SchoolsMetaData>) => MutableModel<Schools, SchoolsMetaData> | void): Schools;
}

export declare class Teacher {
  readonly id: string;
  readonly joining_date?: string;
  readonly year?: number;
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
  readonly teacher_id?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly teacherSchoolsId?: string;
  constructor(init: ModelInit<Teacher, TeacherMetaData>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher, TeacherMetaData>) => MutableModel<Teacher, TeacherMetaData> | void): Teacher;
}