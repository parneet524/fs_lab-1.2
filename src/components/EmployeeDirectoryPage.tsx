import { useEffect, useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import { useAuth, useUser } from "@clerk/clerk-react";

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
  const { user } = useUser();

  // FETCH DATA
  useEffect(() => {
    fetch("http://localhost:3000/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error(err));

    fetch("http://localhost:3000/api/departments")
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((err) => console.error(err));
  }, []);

  // ADD EMPLOYEE
  async function handleAddEmployee(
    firstName: string,
    lastName: string,
    deptName: string
  ) {
    try {
      const token = await getToken();

      await fetch("http://localhost:3000/api/employees", {
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

      const updated = await fetch("http://localhost:3000/api/employees");
      const data = await updated.json();
      setEmployees(data);

    } catch (err) {
      console.error(err);
    }
  }

  // DELETE EMPLOYEE
  async function handleDelete(id: number) {
    try {
      const token = await getToken();

      const res = await fetch(
        `http://localhost:3000/api/employees/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        console.error("Delete failed");
        return;
      }

      const updated = await fetch("http://localhost:3000/api/employees");
      const data = await updated.json();
      setEmployees(data);

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main style={{ padding: "1rem" }}>
      {departments.map((dept: any) => (
        <div key={dept.id} style={{ marginBottom: "20px" }}>
          <h2>{dept.name}</h2>

          <ul>
            {employees
              .filter((emp) => emp.role?.name === dept.name)
              .map((emp) => (
                <li key={emp.id}>
                  {emp.name}

                  {(user?.publicMetadata as any)?.role === "admin" && (
                    <button
                      onClick={() => handleDelete(emp.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
      ))}

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