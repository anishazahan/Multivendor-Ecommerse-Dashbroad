import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { admin_login } from "../../Store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { overrideStyle } from "../../utils/utils";

import {
  messageClear,
  // seller_register,
} from "../../Store/Reducers/authReducer.js";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setSatate] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setSatate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className=" md:w-[80%] w-full lg:w-[550px] border rounded-md text-stone-900 p-2">
        <div className="bg-white pt-7 pb-14 px-8 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[60px] object-cover">
              <img
                className="w-full h-full"
                src="http://localhost:3000/images/logo.png"
                alt="logo"
              />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md text-gray-500 focus:border-indigo-500 overflow-hidden"
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-8">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.passwprd}
                className="px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md text-gray-500 focus:border-indigo-500 overflow-hidden"
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
              />
            </div>

            <button
              disabled={loader ? true : false}
              className="bg-primary w-full hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                "Signup"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
