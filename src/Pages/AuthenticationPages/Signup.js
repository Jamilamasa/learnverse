import React, { useState } from "react";

import enterImg from "../../assets/Womanentersthepasswordfromheraccount.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import SIGNIN from "../../Utility/Routers/Router";
import { useRegister } from "../../Hooks/AuthHook";
import Button from "../../components/UI/Button";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [ register, isLoading ] = useRegister()

  const handleSubmit = async ()=>{
   await register({username: userName, email, password})
  }

  return (
    <div className="flex flex-col h-screen justify-center mt-1 overflow-hidden md:mt-0 align-middle text-center md:flex-row md:space-x-3">
      {/* image */}
      <div className="flex flex-col-reverse justify-center align-middle text-center md:flex-none md:flex-col  md:w-1/2 md:h-screen md:bg-gradient-to-r from-[#8498CB] via-[#8E89A4] to-[#9E7167]">
        {/* <AiOutlineArrowLeft size={35} className='mt-3 ml-3 text-black md:text-white' /> */}
        <img src={enterImg} alt="" className="pb-0" />
        <h1 className="font-inter text-2xl md:font-poppins md:text-5xl font-bold leading-6 tracking-normal text-black md:text-white text-center md:mb-28">
          SIGN UP
        </h1>
      </div>

      {/* Form */}
    <form className="flex justify-center items-center md:w-1/2 space-y-4 md:space-y-7 px-20 align-middle" onSubmit={(e)=>{
      e.preventDefault()
      handleSubmit()
    }}>
        <div className="flex flex-col justify-center items-center md:w-1/2 space-y-4 md:space-y-7 px-20 align-middle ">
          <div className="relative">
            <label
              htmlFor="username"
              className="bg-white absolute text-sm top-[-10px] left-[20px]"
            >
              UserName
            </label>
            <input
              id="userName"
              name="userName"
              type="userName"
              autoComplete="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="Example@gmail.com"
              className="block w-80 md:w-96 rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
            />
          </div>
          
          <div className="relative">
            <label
              htmlFor="email"
              className="bg-white absolute text-sm top-[-10px] left-[20px]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Example@gmail.com"
              className="block w-80 md:w-96 rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="bg-white absolute text-sm top-[-10px] left-[20px]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
              className="block w-80 md:w-96 rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
            />
          </div>
          <Button type='Sign Up'/>
          <p className="pt-0 md:pt-10 text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to={SIGNIN}
              className="font-semibold leading-6 cursor-pointer text-black hover:text-indigo-500"
            >
              Signin
            </Link>
          </p>
        </div>
        </form>
    </div>
  );
};

export default Signup;
