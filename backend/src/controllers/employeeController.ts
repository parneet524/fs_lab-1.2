import { Request, Response } from "express";
import { employeeService, getEmployees } from "../services/employeeService";
import { getAuth } from "@clerk/express";

// 🔹 GET ALL EMPLOYEES
export const getEmployeesController = async (req: Request, res: Response) => {
  try {
    const employees = await getEmployees();

    res.json(
      employees.map((e: any) => ({
        id: e.id,
        name: e.name,
        department: e.role?.name,
      }))
    );
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

// 🔹 CREATE EMPLOYEE
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, email, roleId } = req.body;

    const result = await employeeService.createEmployee(
      name,
      email,
      roleId
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to create employee" });
  }
};

// 🔹 DELETE EMPLOYEE (ADMIN ONLY)
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { sessionClaims } = getAuth(req);

    // 🔹 Fix TS issue
    const role = (sessionClaims?.publicMetadata as any)?.role;

    if (role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    const id = Number(req.params.id);

    await employeeService.deleteEmployee(id);

    res.json({ message: "Employee deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: "Failed to delete employee" });
  }
};