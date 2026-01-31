import roles from "../data/roles.json";
import type { Role } from "../types/Role";

export default function OrganizationPage() {
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Organization</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ borderBottom: "2px solid #000" }}>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>
              Name
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "0.5rem",
                width: "380px",
              }}
            >
              Role
            </th>
          </tr>
        </thead>

        <tbody>
          {roles.map((person: Role, index: number) => (
            <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "0.5rem" }}>
                {person.firstName} {person.lastName}
              </td>
              <td
                style={{
                  padding: "0.5rem",
                  width: "380px",
                  textAlign: "left",
                }}
              >
                {person.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
