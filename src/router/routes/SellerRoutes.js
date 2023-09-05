import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() =>
  import("../../views/pages/seller/SellerDashboard")
);

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    // role: "seller",
    // status: "active",
    ability: ["seller"],
  },
];
