import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

const ProfilePage = () => {
  const userInfo = useOutletContext().userInfo
  
  return (
    <>
      <ProfileHeader />
      <Outlet context={userInfo}/>
    </>
  );
};

export default ProfilePage;
