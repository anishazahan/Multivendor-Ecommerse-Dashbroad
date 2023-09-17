import authReducer from "./Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import chatReducer from "./Reducers/chatReducer";
import dashboardIndexReducer from "./Reducers/dashboardIndexReducer";
import OrderReducer from "./Reducers/orderReducer";
import PaymentReducer from "./Reducers/paymentReducer";
import productReducer from "./Reducers/productReducer";
import sellerReducer from "./Reducers/sellerReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: sellerReducer,
  chat: chatReducer,
  order: OrderReducer,
  payment: PaymentReducer,
  dashboardIndex: dashboardIndexReducer,
};
export default rootReducer;
