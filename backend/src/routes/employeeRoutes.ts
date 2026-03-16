import express from "express";
import {
  getEmployees,
  getDepartments,
  getRoles
} from "../controllers/employeeController";

const router = express.Router();

router.get("/employees", getEmployees);
router.get("/departments", getDepartments);
router.get("/roles", getRoles);

export default router;