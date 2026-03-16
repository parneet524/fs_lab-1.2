import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getEmployees = (req: Request, res: Response) => {
  const employees = employeeService.getEmployees();
  res.json(employees);
};

export const getDepartments = (req: Request, res: Response) => {
  const departments = employeeService.getDepartments();
  res.json(departments);
};

export const getRoles = (req: Request, res: Response) => {
  const roles = employeeService.getRoles();
  res.json(roles);
};