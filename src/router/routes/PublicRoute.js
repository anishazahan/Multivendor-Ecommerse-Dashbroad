import { lazy } from "react";

const Login = lazy(() => import("../../views/auth/Login.jsx"));
const Success = lazy(() => import("../../views/Success.jsx"));
const Register = lazy(() => import("../../views/auth/Register.jsx"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));
const Home = lazy(() => import("../../views/Home.jsx"));
const UnAuthorized = lazy(() => import("../../views/UnAuthorized.jsx"));
const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/admin/login",
  //   element: <AdminLogin />,
  // },
  {
    path: "/unauthorized",
    element: <UnAuthorized />,
  },
  {
    path: "/success?",
    element: <Success />,
  },
];
export default publicRoutes;
