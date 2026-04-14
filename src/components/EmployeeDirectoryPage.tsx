import { useEffect, useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import { useAuth } from "@clerk/clerk-react";

type Employee = {
  id: number;
  name: string;
  role?: {
    name: string;
  };
  email?: string;
};

function EmployeeDirectoryPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);

  const { getToken } = useAuth();

  // FETCH DATA
  useEffect(() => {
    fetch("http://localhost:3000/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Employee fetch error:", err));

    fetch("http://localhost:3000/api/departments")
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((err) => console.error("Department fetch error:", err));
  }, []);

  //  ADD EMPLOYEE (FIXED)
  async function handleAddEmployee(
    firstName: string,
    lastName: string,
    deptName: string
  ) {
    try {
      const token = await getToken();

      const res = await fetch("http://localhost:3000/api/employees", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: firstName + " " + lastName,
          email: firstName + "@test.com",
          roleId:
            deptName === "Management"
              ? 1
              : deptName === "Technology"
              ? 2
              : 3,
        }),
      });

      if (!res.ok) {
        console.error("STATUS:", res.status);
        return;
      }

      // reload employees after adding
      await res.json();

      const updated = await fetch("http://localhost:3000/api/employees");
      const data = await updated.json();
      setEmployees(data);

    } catch (err) {
      console.error("Add employee error:", err);
    }
  }

  return (
    <main style={{ padding: "1rem" }}>
      {/* SHOW EMPLOYEES */}
      {departments.map((dept: any) => (
        <div key={dept.id} style={{ marginBottom: "20px" }}>
          <h2>{dept.name}</h2>

          <ul>
            {employees
              .filter((emp) => emp.role?.name === dept.name)
              .map((emp) => (
                <li key={emp.id}>{emp.name}</li>
              ))}
          </ul>
        </div>
      ))}

      {/* FORM */}
      <AddEmployeeForm
        departmentNames={
          departments.length > 0
            ? departments.map((d: any) => d.name)
            : ["Management", "Technology", "Investments"]
        }
        onAddEmployee={handleAddEmployee}
      />
    </main>
  );
}

export default EmployeeDirectoryPage;