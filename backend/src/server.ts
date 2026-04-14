import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes";
import roleRoutes from "./routes/roleRoutes";
import { clerkMiddleware } from "@clerk/express";
import "dotenv/config";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", roleRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ message: "Backend running" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});