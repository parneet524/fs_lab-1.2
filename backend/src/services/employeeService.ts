import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {
  getEmployees() {
    return employeeRepository.getEmployees();
  },

  getDepartments() {
    return employeeRepository.getDepartments();
  },

  getRoles() {
    return employeeRepository.getRoles();
  }
};