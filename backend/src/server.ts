import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes";
import roleRoutes from "./routes/roleRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend running" });
});

app.use("/employees", employeeRoutes);
app.use("/roles", roleRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});