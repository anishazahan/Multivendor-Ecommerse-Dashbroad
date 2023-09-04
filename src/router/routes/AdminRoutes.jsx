import { lazy } from "react";

const AdminDashbroad = lazy(() =>
  import("../../views/pages/admin/AdminDashbroad")
);

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: <AdminDashbroad />,
    role: "admin",
  },
];
