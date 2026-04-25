import * as repo from "../repositories/employeeRepository";
import prisma from "../prisma";

// 🔹 GET employees
export const getEmployees = async () => {
  return await repo.getAllEmployees();
};

// 🔹 DELETE employee
const deleteEmployee = async (id: number) => {
  return await prisma.employee.delete({
    where: { id },
  });
};

// 🔹 SERVICE OBJECT
export const employeeService = {
  async createEmployee(name: string, email: string, roleId: number) {
    return await repo.createEmployee(name, email, roleId);
  },

  deleteEmployee,
};