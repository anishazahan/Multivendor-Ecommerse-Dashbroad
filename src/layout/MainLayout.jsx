import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./LeftSidebar";
import { useEffect, useState } from "react";
import { socket } from "../utils/utils";
import { useSelector, useDispatch } from "react-redux";
import {
  activeStatus_update,
  updateCustomer,
  updateSellers,
} from "../Store/Reducers/chatReducer";

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo && userInfo.role === "seller") {
      socket.emit("add_seller", userInfo._id, userInfo);
    } else {
      socket.emit("add_admin", userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    socket.on("activeCustomer", (customers) => {
      dispatch(updateCustomer(customers));
    });
    socket.on("activeSeller", (sellers) => {
      dispatch(updateSellers(sellers));
    });
    socket.on("activeAdmin", (data) => {
      dispatch(activeStatus_update(data));
    });
  }, []);
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
