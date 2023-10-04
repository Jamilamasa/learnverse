import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useUser } from "./Hooks/AuthHook";

function Root() {
  const [userInfo, isLoading] = useUser();
  const contextData = {
    userInfo
  }
  return (
    <>
      {/* Layouts such as headers and footers */}
      <Navbar/>
      <Outlet context={contextData}/>

      {/* Route Outlet Goes here */}
    </>
  );
}

export default Root;
