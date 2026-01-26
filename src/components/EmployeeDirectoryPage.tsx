import { useEffect, useState } from "react";
import initialDepartments from "../data/departments.json";
import DepartmentSection from "./DepartmentSection";
import Header from "./Header";
import Footer from "./Footer";
import type { Department } from "../types/Department";
import AddEmployeeForm from "./AddEmployeeForm";

const STORAGE_KEY = "pixell_departments";

function EmployeeDirectoryPage() {
  const [departments, setDepartments] = useState<Department[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as Department[];
    }
    return initialDepartments as Department[];
  });

  // Save to localStorage whenever departments change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(departments));
  }, [departments]);

  const departmentNames = departments.map((d) => d.name);

  function handleAddEmployee(
    firstName: string,
    lastName: string,
    deptName: string
  ) {
    setDepartments((prev) =>
      prev.map((dept) =>
        dept.name === deptName
          ? {
              ...dept,
              employees: [...dept.employees, { firstName, lastName }],
            }
          : dept
      )
    );
  }

  return (
    <>
      <Header />

      <main>
        {departments.map((dept: Department, index) => (
          <DepartmentSection key={index} department={dept} />
        ))}

        <AddEmployeeForm
          departmentNames={departmentNames}
          onAddEmployee={handleAddEmployee}
        />
      </main>

      <Footer />
    </>
  );
}

export default EmployeeDirectoryPage;
