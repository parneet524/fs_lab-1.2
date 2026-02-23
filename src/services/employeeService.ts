import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  createEmployee(
    firstName: string,
    lastName: string,
    department: string
  ) {
    if (firstName.trim().length < 3) {
      return {
        success: false,
        message: "First name must be at least 3 characters."
      };
    }

    const departments = employeeRepo.getDepartments();

    const departmentExists = departments.some(
      (d) => d.name === department
    );

    if (!departmentExists) {
      return {
        success: false,
        message: "Department does not exist."
      };
    }

    const employee = employeeRepo.createEmployee(
      firstName,
      lastName,
      department
    );

    return {
      success: true,
      employee
    };
  }
};