import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between p-2">
      {" "}
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <RiArrowLeftLine size={30} />
      </button>
      <button className="bg-[#E81B1B] py-3 px-5 rounded-3xl drop-shadow-lg border text-white font-medium mr-4">Logout</button>
    </div>
  );
};

export default ProfileHeader;
