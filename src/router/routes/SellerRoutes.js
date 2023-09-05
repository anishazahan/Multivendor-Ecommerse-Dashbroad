import { lazy } from "react";
import Orders from "../../views/pages/seller/Orders";

const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() =>
  import("../../views/pages/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../views/pages/seller/AddProduct"));
const Products = lazy(() => import("../../views/pages/seller/Products"));
const DiscountProducts = lazy(() =>
  import("../../views/pages/seller/DiscountProducts")
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
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/products",
    element: <Products />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-products",
    element: <DiscountProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    visibility: ["active", "deactive"],
  },
];
