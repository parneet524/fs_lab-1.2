import { useState } from "react";

type Props = {
  departmentNames: string[];
  onAddEmployee: (firstName: string, lastName: string, departmentName: string) => void;
};

export default function AddEmployeeForm({ departmentNames, onAddEmployee }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departmentName, setDepartmentName] = useState(departmentNames[0] ?? "");
  const [errors, setErrors] = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();


    setErrors([]);

    const newErrors: string[] = [];

    if (firstName.trim().length < 3) {
      newErrors.push("First name must be at least 3 characters.");
    }

    if (!departmentNames.includes(departmentName)) {
      newErrors.push("Please select an existing department.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddEmployee(firstName.trim(), lastName.trim(), departmentName);

    setFirstName("");
    setLastName("");
    setDepartmentName(departmentNames[0] ?? "");
  }

  return (
    <section style={{ marginTop: 24 }}>
      <h2>Add New Employee</h2>

      {errors.length > 0 && (
        <div style={{ color: "crimson", marginBottom: 12 }}>
          <ul>
            {errors.map((msg) => (
              <li key={msg}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name{" "}
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Last Name{" "}
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Department{" "}
            <select value={departmentName} onChange={(e) => setDepartmentName(e.target.value)}>
              {departmentNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" style={{ marginTop: 12 }}>
          Add Employee
        </button>
      </form>
    </section>
  );
}
