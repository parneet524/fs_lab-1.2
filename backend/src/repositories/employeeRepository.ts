import employees from "../data/employees.json";
import departments from "../data/departments.json";
import roles from "../data/roles.json";

export const employeeRepository = {
  getEmployees() {
    return employees;
  },

  getDepartments() {
    return departments;
  },

  getRoles() {
    return roles;
  }
};