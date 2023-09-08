import { lazy } from "react";
import Orders from "../../views/pages/seller/Orders";

const SellerDashboard = lazy(() =>
  import("../../views/pages/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../views/pages/seller/AddProduct"));
const Payments = lazy(() => import("../../views/pages/seller/Payments"));
const Products = lazy(() => import("../../views/pages/seller/Products"));
const Pending = lazy(() => import("../../views/Pending"));
const Deactive = lazy(() => import("../../views/Deactive"));
const EditProduct = lazy(() => import("../../views/pages/seller/EditProduct"));
const SellerToCustomer = lazy(() =>
  import("../../views/pages/seller/SellerToCustomer")
);
const SellerToAdmin = lazy(() =>
  import("../../views/pages/seller/SellerToAdmin")
);
const DiscountProducts = lazy(() =>
  import("../../views/pages/seller/DiscountProducts")
);

export const sellerRoutes = [
  // {
  //   path: "/seller/account-pending",
  //   element: <Pending />,
  //   ability: "seller",
  // },
  {
    path: "/seller/account-deactive",
    element: <Deactive />,
    ability: "seller",
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
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
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
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
    visibility: ["active", "deactive"], //if admin bane seller,,although seller access this routes
  },
  //   {
  //     path: '/seller/dashboard/order/details/:orderId',
  //     element: <OrderDetails />,
  //     role: 'seller',
  //     visibility: ['active', 'deactive']
  // },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  // {
  //   path: "/seller/dashboard/chat-support",
  //   element: <SellerToAdmin />,
  //   role: "seller",
  //   visibility: ["active", "deactive", "pending"],
  // },
  // {
  //   path: "/seller/dashboard/chat-customer",
  //   element: <SellerToCustomer />,
  //   role: "seller",
  //   status: "active",
  // },
  // {
  //   path: "/seller/dashboard/chat-customer/:customerId",
  //   element: <SellerToCustomer />,
  //   role: "seller",
  //   status: "active",
  // },
  //   {
  //     path: '/seller/dashboard/profile',
  //     element: <Profile />,
  //     role: 'seller',
  //     visibility: ['active', 'deactive', 'pending']
  // }
];
