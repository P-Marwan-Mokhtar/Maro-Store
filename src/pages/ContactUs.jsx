import React from "react";

const ContactUs = () => {
  return (
    <div className="container min-h-[100vh] pb-[80px] pt-[260px]  md:pt-[150px] flex flex-col items-center justify-center">
      <h1 className=" text-[40px] md:text-[70px]  mb-[50px] text-gray-900 flex gap-3 font-bold">
        Contact<span className="text-gray-500">Us</span>
      </h1>
      <div className="w-[1000px] flex flex-col gap-4 max-w-full">
        {" "}
        <div className="flex gap-5 ">
          <input type="text" className="inp "  placeholder="Your First Name" required/>
          <input type="text" className="inp" placeholder="Your Last Name" required/>
        </div>
        <input type="email" placeholder="Email" className="inp" required/>
        <textarea
          name=""
          className=" inp  w-full   !pt-3 "
          placeholder="Type Message"
          rows={8}
          id=""
        ></textarea>
        <button className=" px-10 w-fit bg-gray-900 hover:bg-gray-700 transition-all duration-200 text-[18px] font-semibold text-white py-2 rounded-[5px]">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
