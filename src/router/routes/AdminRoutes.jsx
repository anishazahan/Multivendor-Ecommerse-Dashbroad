import { lazy } from "react";

const AdminDashbroad = lazy(() =>
  import("../../views/pages/admin/AdminDashbroad")
);

export const adminRoutes = [
  {
    path: "admin/dashbroad",
    element: <AdminDashbroad />,
    role: "admin",
  },
];
