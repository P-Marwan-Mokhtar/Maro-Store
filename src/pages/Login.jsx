import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import PageTransition from "../components/PageTransition";

const LogIn = () => {
  return (
    <PageTransition>
      <section className="container  pb-[80px] md:pb-0 pt-[250px] md:pt-[100px]   min-h-[100vh]   w-full  flex justify-center items-center ">
        <form className="bg-white  p-[30px] shadow-[0px_0px_15px_1px_#c3b8b8] rounded-[10px] w-[400px]">
          <h2 className="text-main_color text-[30px] font-bold text-center mb-[30px]">
            Welcome Back
          </h2>
          <input
            type="email"
            className="inp mb-[15px]"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="inp"
            placeholder="Password"
            required
          />
          <div className=" flex justify-end">
            <p className="w-fit my-[15px] hover:underline cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <button className="btn py-2 text-white bg-gray-900 !w-full !rounded-[5px]  ">
            Login
          </button>
          <div className="my-[15px]">
            <p className="flex gap-[5px]">
              Don't have an account?
              <Link to={"/signup"}>
                <span className=" text-gray-900 border-b-[1px] border-main_color">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
          <button className="flex items-center  bg-white w-full h-[40px] border-2 border-gray-900 rounded-[5px] justify-center gap-[5px] text-black">
            <span className="text-[25px]">
              <FcGoogle />
            </span>
            Login With Google
          </button>
        </form>
      </section>
    </PageTransition>
  );
};

export default LogIn;
