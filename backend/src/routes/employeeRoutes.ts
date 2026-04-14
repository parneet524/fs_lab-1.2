import express from "express";
import { getEmployees, employeeService } from "../services/employeeService";

const router = express.Router();

router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.json(employees);
});

router.post("/", async (req, res) => {
  const { name, email, roleId } = req.body;

  const result = await employeeService.createEmployee(
    name,
    email,
    roleId
  );

  res.json(result);
});

export default router;