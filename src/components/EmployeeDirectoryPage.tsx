import departments from "../data/departments.json";
import DepartmentSection from "./DepartmentSection";
import Header from "./Header";
import Footer from "./Footer";
import type { Department } from "../types/Department";

function EmployeeDirectoryPage() {
  return (
    <>
      <Header />

      <main>
        {departments.map((dept: Department, index) => (
          <DepartmentSection key={index} department={dept} />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default EmployeeDirectoryPage;
