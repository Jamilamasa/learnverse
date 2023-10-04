import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import logo from "../../assets/logo.png";
import vector from "../../assets/vector.png";
import CoursesCovered from "../../components/ProfilePage/CoursesCovered";
import SubscriptionCard from "../../components/ProfilePage/SubscriptionCard";
import { EDITPROFILE } from '../../Utility/Routers/Router';

const Profile = () => {
  const userInfo = useOutletContext()
  return (
    <div className="flex flex-col items-center justify-center  max-w-md mx-auto mb-28">
        {/* Header */}
        <h1 className="font-medium text-3xl mb-5">Profile</h1>
        {/* Profile Photo */}
        <div className="relative border rounded-full p-5 mb-3">
          <Link to={EDITPROFILE}>
            <span className=" bg-[#F2E5E5] rounded-full w-7 h-7  absolute bottom-[-7px] right-0">
              <img
                src={vector}
                className="w-3 h-3 absolute top-[9px] left-[7px]"
                alt="Vector"
              />
            </span>
            <img src={logo} className="w-11 h-11" alt="Profile" />
          </Link>
        </div>
        {/* User Email & Name */}
        <div className="text-center mb-8 ">
          <h1 className="font-bold text-xl">{`${userInfo?.lastName || ""} ${userInfo?.firstName || ""}`}</h1>
          <p className="font-normal text-base text-[#7c7c7c]">
            {userInfo?.email || ''}
          </p>
        </div>

        {/* Subscription Plan */}
        <div className="self-start w-full">
          <h1 className="font-bold text-lg ml-9">Subscription Plan</h1>
          <SubscriptionCard/>
        </div>

        {/* Courses covered */}
        <div className="self-start w-full">
          <h1 className="font-bold text-lg ml-9">Courses Covered</h1>
          <CoursesCovered/>
        </div>
      </div>
  )
}

export default Profile