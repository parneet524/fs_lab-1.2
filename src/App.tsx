import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import EmployeeDirectoryPage from "./components/EmployeeDirectoryPage";
import OrganizationPage from "./components/OrganizationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/employees" replace />} />
          <Route path="employees" element={<EmployeeDirectoryPage />} />
          <Route path="organization" element={<OrganizationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
