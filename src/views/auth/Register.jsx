import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineGooglePlus, AiOutlineGithub } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { PropagateLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { overrideStyle } from "../../utils/utils";
import {
  messageClear,
  seller_register,
} from "../../Store/Reducers/authReducer.js";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setSatate] = useState({
    name: "",
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
    // console.log(state);
    dispatch(seller_register(state));
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
        <div className="bg-white py-7 px-8 rounded-md">
          <h2 className="text-xl font-bold mb-3">Welcome to e-commerce</h2>
          <p className="text-sm mb-3">
            Please register to your account and start your bussiness
          </p>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={inputHandle}
                value={state.name}
                className="px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md text-gray-500 focus:border-indigo-500 overflow-hidden"
                type="text"
                name="name"
                placeholder="name"
                id="name"
                required
              />
            </div>
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
            <div className="flex flex-col w-full gap-1 mb-3">
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
            <div className="flex items-center w-full gap-3 mb-3 py-4">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              <label htmlFor="checkbox ">
                I agree to privacy policy & terms
              </label>
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
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account ?{" "}
                <Link className="text-primary underline" to="/login">
                  Login
                </Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-300 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-300 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-indigo-700 shadow-lg hover:shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FiFacebook />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-cyan-700 shadow-lg hover:shadow-cyan-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <CiTwitter />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg hover:shadow-purple-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
