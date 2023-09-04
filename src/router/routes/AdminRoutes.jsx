import { lazy } from "react";

const AdminDashboard = lazy(() =>
  import("../../views/pages/admin/AdminDashboard")
);
const Orders = lazy(() => import("../../views/pages/admin/Orders"));
const Category = lazy(() => import("../../views/pages/admin/Category"));
const Sellers = lazy(() => import("../../views/pages/admin/Sellers"));

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
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
];
