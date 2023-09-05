import { lazy } from "react";
import SellerDetails from "../../views/pages/admin/SellerDetails";

const AdminDashboard = lazy(() =>
  import("../../views/pages/admin/AdminDashboard")
);
const Orders = lazy(() => import("../../views/pages/admin/Orders"));
const Category = lazy(() => import("../../views/pages/admin/Category"));
const Sellers = lazy(() => import("../../views/pages/admin/Sellers"));
const ChatSeller = lazy(() => import("../../views/pages/admin/ChatSeller"));
const OrderDetails = lazy(() => import("../../views/pages/admin/OrderDetails"));
const SellerRequest = lazy(() =>
  import("../../views/pages/admin/SellerRequest")
);
const DeactiveSellers = lazy(() =>
  import("../../views/pages/admin/DeactiveSellers")
);
const PaymentRequest = lazy(() =>
  import("../../views/pages/admin/PaymentRequest")
);

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
  {
    path: "admin/dashboard/seller/details/:sellerId",
    element: <SellerDetails />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactive-sellers",
    element: <DeactiveSellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers-request",
    element: <SellerRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-sellers",
    element: <ChatSeller />,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-sellers/:sellerId",
    element: <ChatSeller />,
    role: "admin",
  },
  {
    path: "admin/dashboard/order/details/:orderId",
    element: <OrderDetails />,
    role: "admin",
  },
];
