import { useState } from "react";

type Props = {
  departmentNames: string[];
  onAddEmployee: (
    firstName: string,
    lastName: string,
    deptName: string
  ) => void;
};

function AddEmployeeForm({ departmentNames, onAddEmployee }: Props) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState(departmentNames[0] ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!firstName || !lastName) return;

    onAddEmployee(firstName, lastName, department);

    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>

      <div>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label>Last Name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label>Department</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {departmentNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;