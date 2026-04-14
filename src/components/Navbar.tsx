import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    marginRight: "1rem",
    textDecoration: "none",
    fontWeight: isActive ? "700" : "400",
  });

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc", display: "flex", justifyContent: "space-between" }}>
      
      {/* LEFT SIDE LINKS */}
      <div>
        <NavLink to="/employees" style={linkStyle}>
          Employees
        </NavLink>
        <NavLink to="/organization" style={linkStyle}>
          Organization
        </NavLink>
      </div>

      {/* RIGHT SIDE AUTH */}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

    </nav>
  );
}