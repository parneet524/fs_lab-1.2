import * as repo from "../repositories/employeeRepository";

export const getEmployees = async () => {
  return await repo.getAllEmployees();
};