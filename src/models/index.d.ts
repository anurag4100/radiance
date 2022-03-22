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

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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

export declare class Subject {
  readonly id: string;
  readonly subject_id?: number | null;
  readonly subject_name?: string | null;
  readonly details?: string | null;
  readonly subject_marks?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Subject, SubjectMetaData>);
  static copyOf(source: Subject, mutator: (draft: MutableModel<Subject, SubjectMetaData>) => MutableModel<Subject, SubjectMetaData> | void): Subject;
}

export declare class Class {
  readonly id: string;
  readonly subject_id?: number | null;
  readonly class_id?: number | null;
  readonly class_name?: string | null;
  readonly dept_name?: string | null;
  readonly shift?: string | null;
  readonly details?: string | null;
  readonly year?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Class, ClassMetaData>);
  static copyOf(source: Class, mutator: (draft: MutableModel<Class, ClassMetaData>) => MutableModel<Class, ClassMetaData> | void): Class;
}

export declare class Student {
  readonly id: string;
  readonly student_id?: number | null;
  readonly enroll_date?: string | null;
  readonly class_id?: number | null;
  readonly enroll_fee?: number | null;
  readonly first_name?: string | null;
  readonly middle_name?: string | null;
  readonly year?: number | null;
  readonly father_name?: string | null;
  readonly mother_name?: string | null;
  readonly last_name?: string | null;
  readonly religion?: string | null;
  readonly email?: string | null;
  readonly mobile?: string | null;
  readonly details?: string | null;
  readonly dob?: string | null;
  readonly school_id?: number | null;
  readonly address?: Address | null;
  readonly schoolsStudentsId?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly studentAddressId?: string | null;
  constructor(init: ModelInit<Student>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

export declare class Address {
  readonly id: string;
  readonly line1?: string | null;
  readonly line2?: string | null;
  readonly line3?: string | null;
  readonly city?: string | null;
  readonly district?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly zip?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class Schools {
  readonly id: string;
  readonly school_id?: number | null;
  readonly name?: string | null;
  readonly principal?: Employee | null;
  readonly details?: string | null;
  readonly phone?: string | null;
  readonly mobile?: string | null;
  readonly email?: string | null;
  readonly address?: Address | null;
  readonly students?: (Student | null)[] | null;
  readonly employees?: (Employee | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly schoolsPrincipalId?: string | null;
  readonly schoolsAddressId?: string | null;
  constructor(init: ModelInit<Schools, SchoolsMetaData>);
  static copyOf(source: Schools, mutator: (draft: MutableModel<Schools, SchoolsMetaData>) => MutableModel<Schools, SchoolsMetaData> | void): Schools;
}

export declare class Employee {
  readonly id: string;
  readonly joining_date?: string | null;
  readonly first_name?: string | null;
  readonly middle_name?: string | null;
  readonly last_name?: string | null;
  readonly dob?: string | null;
  readonly email?: string | null;
  readonly mobile?: string | null;
  readonly details?: string | null;
  readonly role?: (Role | null)[] | null;
  readonly compensation?: Compensation | null;
  readonly schoolsEmployeesId?: string | null;
  readonly address?: Address | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly employeeCompensationId?: string | null;
  readonly employeeAddressId?: string | null;
  constructor(init: ModelInit<Employee>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
}

export declare class Role {
  readonly id: string;
  readonly name?: string | null;
  readonly type?: string | null;
  readonly payBand?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly employeeRoleId?: string | null;
  constructor(init: ModelInit<Role, RoleMetaData>);
  static copyOf(source: Role, mutator: (draft: MutableModel<Role, RoleMetaData>) => MutableModel<Role, RoleMetaData> | void): Role;
}

export declare class Compensation {
  readonly id: string;
  readonly type?: string | null;
  readonly amount?: number | null;
  readonly isTaxable?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Compensation, CompensationMetaData>);
  static copyOf(source: Compensation, mutator: (draft: MutableModel<Compensation, CompensationMetaData>) => MutableModel<Compensation, CompensationMetaData> | void): Compensation;
}