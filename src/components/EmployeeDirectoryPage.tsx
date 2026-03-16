import { useEffect, useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";

type Employee = {
  id: number;
  name: string;
  department: string;
  role?: string;
  email?: string;
};

function EmployeeDirectoryPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      });

    fetch("http://localhost:3000/api/departments")
      .then((res) => res.json())
      .then((data) => {
        setDepartments(data);
      });
  }, []);

  function handleAddEmployee(
    firstName: string,
    lastName: string,
    deptName: string
  ) {
    fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        department: deptName,
      }),
    })
      .then((res) => res.json())
      .then((newEmployee) => {
        setEmployees([...employees, newEmployee]);
      });
  }

  return (
    <main style={{ padding: "1rem" }}>
      {departments.map((dept: any) => (
        <div key={dept.id} style={{ marginBottom: "20px" }}>
          <h2>{dept.name}</h2>

          <ul>
            {employees
              .filter((emp) => emp.department === dept.name)
              .map((emp) => (
                <li key={emp.id}>{emp.name}</li>
              ))}
          </ul>
        </div>
      ))}

      <AddEmployeeForm
        departmentNames={departments.map((d: any) => d.name)}
        onAddEmployee={handleAddEmployee}
      />
    </main>
  );
}

export default EmployeeDirectoryPage;