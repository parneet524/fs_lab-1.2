import express from "express";
import {
  getEmployeesController,
  createEmployee,
  deleteEmployee,
} from "../controllers/employeeController";

const router = express.Router();

router.get("/", getEmployeesController);
router.post("/", createEmployee);
router.delete("/:id", deleteEmployee);

export default router;