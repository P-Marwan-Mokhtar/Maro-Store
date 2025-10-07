import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";


const SignUp = () => {
  return (
     <PageTransition>
    <section className="container   min-h-[100vh] pb-[80px] md:pb-0 pt-[250px] md:pt-[100px] w-full  flex justify-center items-center ">
      <form className="bg-white  p-[30px] shadow-[0px_0px_15px_1px_#c3b8b8] rounded-[10px] w-[400px]">
        <h2 className="text-main_color text-[30px] font-bold text-center mb-[30px]">
          Sign Up
        </h2>
        <input
          type="text"
          className="inp mb-[15px]"
          placeholder="Name"
          required
        />
        <input
          type="email"
          className="inp mb-[15px]"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="inp mb-[15px]"
          placeholder="Password"
          required
        />
        <input
          type="password"
          className="inp mb-[15px]"
          placeholder="Confirm Password"
          required
        />

        <button className="btn bg-gray-900 py-2 text-white !w-full !rounded-[5px]  ">
          Create Account
        </button>
        <div className="my-[15px]">
          <p className="flex gap-[5px]">
            Already have an account?
            <Link to={"/login"}>
              <span className=" text-main_color border-b-[1px] border-main_color">
                Login
              </span>
            </Link>
          </p>
        </div>
        <button className="flex items-center  bg-white w-full h-[40px] border-2 border-main_color rounded-[5px] justify-center gap-[5px] text-black">
          <span className="text-[25px]">
            <FcGoogle />
          </span>
          Sign Up With Google
        </button>
      </form>
    </section>
     </PageTransition> 
  );
};

export default SignUp;
