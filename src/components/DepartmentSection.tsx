import type { Department } from "../types/Department";

type Props = {
  department: Department;
};

function DepartmentSection({ department }: Props) {
  return (
    <section>
      <h2>{department.name}</h2>
      <ul>
        {department.employees.map((emp, index) => (
          <li key={index}>
            {emp.firstName} {emp.lastName}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DepartmentSection;
