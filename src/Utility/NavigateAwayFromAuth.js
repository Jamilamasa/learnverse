import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../Hooks/AuthHook";
import { ROOT } from "./Routers/Router";

const NavigateAwayFromAuth = ({ children }) => {
  const [userInfo, isLoading] = useUser();

  if (!userInfo) {
    return <>{children}</>;
  } else return <Navigate to={ROOT} />;
};

export default NavigateAwayFromAuth;
