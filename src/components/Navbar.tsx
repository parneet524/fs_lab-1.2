import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    marginRight: "1rem",
    textDecoration: "none",
    fontWeight: isActive ? "700" : "400",
  });

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/employees" style={linkStyle}>
        Employees
      </NavLink>
      <NavLink to="/organization" style={linkStyle}>
        Organization
      </NavLink>
    </nav>
  );
}
