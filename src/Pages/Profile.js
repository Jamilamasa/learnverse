import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <RiArrowLeftLine size={30} />
      </button>
      <div className="flex flex-col items-center justify-center m-9">
        {/* Header */}
        <h1 className="font-medium text-3xl mb-5">Profile</h1>
        {/* Profile Photo */}
        <div className="relative border rounded-full p-5 mb-3">
          <Link to="">
            <span className=" bg-[#32d532] rounded-full w-7 h-7  absolute bottom-[-7px] right-0"></span>
            <img src={logo} className=" w-11 h-11" alt="" />
          </Link>
        </div>
        {/* User Email & Name */}

        <h1 className="font-medium text-lg">Jamil Amasa</h1>
        <p className="font-normal text-base text-[#7c7c7c]">
          Jamilamasa@gmail.com
        </p>
        {/* Subscription Plan */}
        <h1 className="font-medium text-sm">Subscription Plan</h1>
        {/* Courses covered */}
      </div>
    </>
  );
};

export default Profile;
