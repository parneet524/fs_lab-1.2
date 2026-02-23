export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
};

export type Department = {
  id: number;
  name: string;
};

let departments: Department[] = [
  { id: 1, name: "Management" },
  { id: 2, name: "Technology" }
];

let employees: Employee[] = [];

export const employeeRepo = {
  getDepartments(): Department[] {
    return departments;
  },

  getEmployees(): Employee[] {
    return employees;
  },

  createEmployee(
    firstName: string,
    lastName: string,
    department: string
  ): Employee {
    const newEmployee: Employee = {
      id: employees.length + 1,
      firstName,
      lastName,
      department
    };

    employees.push(newEmployee);
    return newEmployee;
  }
};