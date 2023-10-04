import React from "react";
import { Outlet } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

const ProfilePage = () => {
  return (
    <>
      <ProfileHeader />
      <Outlet />
    </>
  );
};

export default ProfilePage;
