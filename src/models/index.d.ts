import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SubjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StudentMetaData = {
  readOnlyFields;
}

type SchoolsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeMetaData = {
  readOnlyFields;
}

type RoleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompensationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
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
  readonly details?: string;
  readonly year?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
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
  readonly details?: string;
  readonly dob?: string;
  readonly school_id?: number;
  readonly schoolsStudentsId?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Student>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

export declare class Schools {
  readonly id: string;
  readonly school_id?: number;
  readonly name?: string;
  readonly principal?: Employee;
  readonly details?: string;
  readonly phone?: string;
  readonly mobile?: string;
  readonly email?: string;
  readonly address?: Address;
  readonly students?: (Student | null)[];
  readonly employees?: (Employee | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly schoolsPrincipalId?: string;
  readonly schoolsAddressId?: string;
  constructor(init: ModelInit<Schools, SchoolsMetaData>);
  static copyOf(source: Schools, mutator: (draft: MutableModel<Schools, SchoolsMetaData>) => MutableModel<Schools, SchoolsMetaData> | void): Schools;
}

export declare class Employee {
  readonly id: string;
  readonly joining_date?: string;
  readonly first_name?: string;
  readonly middle_name?: string;
  readonly last_name?: string;
  readonly dob?: string;
  readonly email?: string;
  readonly mobile?: string;
  readonly details?: string;
  readonly role?: (Role | null)[];
  readonly compensation?: Compensation;
  readonly schoolsEmployeesId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly employeeCompensationId?: string;
  constructor(init: ModelInit<Employee>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
}

export declare class Role {
  readonly id: string;
  readonly name?: string;
  readonly type?: string;
  readonly payBand?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly employeeRoleId?: string;
  constructor(init: ModelInit<Role, RoleMetaData>);
  static copyOf(source: Role, mutator: (draft: MutableModel<Role, RoleMetaData>) => MutableModel<Role, RoleMetaData> | void): Role;
}

export declare class Compensation {
  readonly id: string;
  readonly type?: string;
  readonly amount?: number;
  readonly isTaxable?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Compensation, CompensationMetaData>);
  static copyOf(source: Compensation, mutator: (draft: MutableModel<Compensation, CompensationMetaData>) => MutableModel<Compensation, CompensationMetaData> | void): Compensation;
}

export declare class Address {
  readonly id: string;
  readonly line1?: string;
  readonly line2?: string;
  readonly line3?: string;
  readonly city?: string;
  readonly district?: string;
  readonly state?: string;
  readonly country?: string;
  readonly zip?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}