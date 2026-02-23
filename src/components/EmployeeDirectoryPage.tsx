import { useState } from "react";
import { employeeRepo } from "../repositories/employeeRepo";
import { employeeService } from "../services/employeeService";
import AddEmployeeForm from "./AddEmployeeForm";

function EmployeeDirectoryPage() {
  // Load employees from repository
  const [employees, setEmployees] = useState(() =>
    employeeRepo.getEmployees()
  );

  // Load departments from repository
  const departments = employeeRepo.getDepartments();

  function handleAddEmployee(
    firstName: string,
    lastName: string,
    deptName: string
  ) {
    const result = employeeService.createEmployee(
      firstName,
      lastName,
      deptName
    );

    if (result.success) {
      // Important: create new array reference
      setEmployees([...employeeRepo.getEmployees()]);
    } else {
      alert(result.message);
    }
  }

  return (
    <main style={{ padding: "1rem" }}>
      {departments.map((dept) => (
        <div key={dept.id} style={{ marginBottom: "20px" }}>
          <h2>{dept.name}</h2>

          <ul>
            {employees
              .filter((emp) => emp.department === dept.name)
              .map((emp) => (
                <li key={emp.id}>
                  {emp.firstName} {emp.lastName}
                </li>
              ))}
          </ul>
        </div>
      ))}

      <AddEmployeeForm
        departmentNames={departments.map((d) => d.name)}
        onAddEmployee={handleAddEmployee}
      />
    </main>
  );
}

export default EmployeeDirectoryPage;