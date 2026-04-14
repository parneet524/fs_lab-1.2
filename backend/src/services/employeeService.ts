import * as repo from "../repositories/employeeRepository";

export const getEmployees = async () => {
  return await repo.getAllEmployees();
};

export const employeeService = {
  async createEmployee(name: string, email: string, roleId: number) {
    return await repo.createEmployee(name, email, roleId);
  }
};