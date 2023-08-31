import { lazy } from "react";
// import Login from "../../views/auth/Login";
// import Register from "../../views/auth/Register";

const Login = lazy(() => import("../../views/auth/Login.jsx"));
const Register = lazy(() => import("../../views/auth/Register.jsx"));
// const AdminLogin = lazy(() => import('../../views/auth/AdminLogin'))
// const Home = lazy(() => import('../../views/Home'))
// const UnAuthorized = lazy(() => import('../../views/UnAuthorized'))
const publicRoutes = [
  // {
  //     path: '/',
  //     element: <Home />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //     path: '/admin/login',
  //     element: <AdminLogin />
  // },
  // {
  //     path: '/unauthorized',
  //     element: <UnAuthorized />
  // }
];
export default publicRoutes;
