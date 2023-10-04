import React from "react";
import Button from "../../components/UI/Button"
import logo from "../../assets/logo.png";
import vector from "../../assets/vector.png";
import { useOutletContext } from "react-router-dom";

const EditProfile = () => {
  const userInfo = useOutletContext()
  return (
    <div className="flex flex-col items-center justify-center  max-w-md mx-auto mb-28">
      {/* Header */}
      <h1 className="font-medium text-3xl mb-5">Your Profile</h1>
      {/* Profile Photo */}
      <div className="relative border rounded-full p-5 mb-3">
        <button>
          <span className=" bg-[#F2E5E5] rounded-full w-7 h-7  absolute bottom-[-7px] right-0">
            <img
              src={vector}
              className="w-3 h-3 absolute top-[9px] left-[7px]"
              alt="Vector"
            />
          </span>
          <img src={logo} className="w-11 h-11" alt="Profile" />
        </button>
      </div>
      {/* User Email & Name */}
      <div className="text-center mb-8 ">
          <h1 className="font-bold text-xl">{`${userInfo?.lastName || ""} ${userInfo?.firstName || ""}`}</h1>
          <p className="font-normal text-base text-[#7c7c7c]">
            {userInfo?.email || ''}
          </p>
        </div>

      {/* Form */}
      <form className="w-full p-5">
        {/* User name */}
        <div className="relative mb-7">
          <input
            type="text"
            id="username"
            className=" w-full border-2 py-4 px-5 rounded-full block pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rborder-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            defaultValue={userInfo?.userName}
          />
          <label
            for="username"
            className="bg-white text-[#343434B2] absolute text-lg duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] mx-3 peer-focus:mx-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            User Name
          </label>
        </div>
        {/* First Name */}
        <div className="relative mb-7">
          <input
            type="text"
            id="first-name"
            className=" w-full border-2 py-4 px-5 rounded-full block pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rborder-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="first-name"
            className="bg-white text-[#343434B2] absolute text-lg duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] mx-3 peer-focus:mx-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            First Name
          </label>
        </div>
        {/* Last name */}
        <div className="relative mb-7">
          <input
            type="text"
            id="last-name"
            className=" w-full border-2 py-4 px-5 rounded-full block pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rborder-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="last-name"
            className="bg-white text-[#343434B2] absolute text-lg duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] mx-3 peer-focus:mx-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Last Name
          </label>
        </div>
        {/* Gender */}
        <div className="relative mb-7">
          {/* <input
            type="text"
            id="Gender"
            className=" w-full border-2 py-4 px-5 rounded-full block pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rborder-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          /> */}
          <label
            for="gender"
            className="bg-white text-[#343434B2] absolute text-lg duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] mx-3 peer-focus:mx-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Gender
          </label>
          <select id="gender" className="w-full border-2 py-4 px-5 rounded-full block pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rborder-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue=""><option value="">--Select A Gender--</option><option value="male">Male</option><option value="female">Female</option></select>
        </div>
        {/* User Type */}
        <div className="relative mb-7">
          <input
            type="text"
            id="user-type"
            className=" w-full border-2 py-4 px-5 rounded-full block pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rborder-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            disabled
            value="Student"
          />
          <label
            for="user-type"
            className="bg-white text-[#343434B2] absolute text-lg duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] mx-3 peer-focus:mx-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            User Type
          </label>
        </div>
        {/* User email */}
        <div className="relative mb-7">
          <input
            type="email"
            id="email"
            className=" w-full border-2 py-4 px-5 rounded-full block pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rborder-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            defaultValue={userInfo?.email}
          />
          <label
            for="email"
            className="bg-white text-[#343434B2] absolute text-lg duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] mx-3 peer-focus:mx-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Email
          </label>
        </div>
        {/* User name */}
        <div className="relative mb-7">
          <input
            type="date"
            id="dob"
            className=" w-full border-2 py-4 px-5 rounded-full block pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rborder-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="dob"
            className="bg-white text-[#343434B2] absolute text-lg duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] mx-3 peer-focus:mx-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Date Of Birth
          </label>
        </div>
        <Button type="Save"/>
      </form>
    </div>
  );
};

export default EditProfile;
