import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getEmployees = async (req: Request, res: Response) => {
  const employees = await employeeService.getEmployees();

  res.json(
    employees.map((e: any) => ({
      id: e.id,
      name: e.name,
      department: e.role.name,
    }))
  );
};

export const getRoles = async (req: Request, res: Response) => {
  const roles = await employeeService.getRoles();
  res.json(roles);
};