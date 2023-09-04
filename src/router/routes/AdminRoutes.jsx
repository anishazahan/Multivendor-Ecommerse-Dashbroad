import { lazy } from "react";

const AdminDashboard = lazy(() =>
  import("../../views/pages/admin/AdminDashboard")
);
const Orders = lazy(() => import("../../views/pages/admin/Orders"));

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
];
