import React from "react";
import { FaList } from "react-icons/fa";
import { useSelector } from "react-redux";
import adminlogo from "../assets/Frame 4 (5).png";
const Header = ({ showSidebar, setShowSidebar }) => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return (
    <div className="fixed top-0 left-0 w-full py-3 px-2 lg:px-5 z-40">
      <div className="ml-0 shadow lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-white text-[#d0d2d6] px-5 transition-all">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-slate-200 shadow hover:shadow-indigo-500/50 justify-center items-center cursor-pointer"
        >
          <span className="text-black">
            <FaList />
          </span>
        </div>
        <div className="hidden md:block">
          <input
            className="px-5 py-2 outline-none border bg-gray-50 border-gray-200 bg-transparent rounded text-[#d0d2d6] focus:border-gray-300 overflow-hidden"
            type="text"
            name="search"
            placeholder="search"
          />
        </div>
        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className="text-sm font-bold text-slate-800">
                  {userInfo.name}
                </h2>
                <span className="text-[14px] text-gray-500 w-full font-normal">
                  {userInfo.role}
                </span>
              </div>
              {userInfo.role === "admin" ? (
                <img
                  className="w-[45px] h-[45px] rounded-full overflow-hidden"
                  src={adminlogo}
                  alt=""
                />
              ) : (
                <img
                  className="w-[45px] h-[45px] rounded-full overflow-hidden"
                  src={userInfo.image}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
