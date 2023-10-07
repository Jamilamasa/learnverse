import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "../../Pages/AuthenticationPages/Signin";
import Signup from "../../Pages/AuthenticationPages/Signup";
import Welcome from "../../Pages/AuthenticationPages/Welcome";
import Dashboard from "../../Pages/Dashboard";
import Root from "../../Root";
import ProtectedComponent from "../ProtectedComponent";
import { AppProvider } from "../../Context/AppContext";
import Course from "../../Pages/Course";
import EachCourseTopic from "../../Pages/EachCourseTopic";
import Quiz from "../../Pages/Quiz/Quiz";
import Instructions from "../../Pages/Quiz/Instructions";
import Profile from "../../Pages/Profile/Profile";
import NavigateAwayFromAuth from "../NavigateAwayFromAuth";
import EditProfile from "../../Pages/Profile/EditProfile";
import ProfilePage from "../../Pages/Profile/ProfilePage";

// Export Route paths
export const ROOT = "/";
export const SIGNIN = "/signin";
export const SIGNUP = "/signup";
export const DASHBOARD = "/dashboard";
export const WELCOME = "/welcome";
export const COURSE = "/course/:id";
export const EACHCOURSE = "/course/:id/:id";

export const QUIZ = "/quiz";
export const INSTRUCTIONS = "/instructions";

export const PROFILE = "/profile";
export const EDITPROFILE = "/profile/edit";

// Configure routes below
const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <ProtectedComponent>
        <Root />
      </ProtectedComponent>
    ),
    errorElement: <h1>An Error Has Occured</h1>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: PROFILE,
        element: <ProfilePage />,
        children: [
          { index: true, element: <Profile /> },
          { path: EDITPROFILE, element: <EditProfile /> },
        ],
      },
    ],
  },
  {
    path: SIGNIN,
    element: (
      <NavigateAwayFromAuth>
        <Signin />
      </NavigateAwayFromAuth>
    ),
    errorElement: <h1>An Error Has Occured</h1>,
  },
  {
    path: SIGNUP,
    element: (
      <NavigateAwayFromAuth>
        <Signup />
      </NavigateAwayFromAuth>
    ),
    errorElement: <h1>An Error Has Occured</h1>,
  },
  {
    path: WELCOME,
    element: (
      <NavigateAwayFromAuth>
        <Welcome />
      </NavigateAwayFromAuth>
    ),
    errorElement: <h1>An Error Has Occured</h1>,
  },
  {
    path: COURSE,
    element: (
      <ProtectedComponent>
        <Root />
      </ProtectedComponent>
    ),
    errorElement: <h1>An Error Has Occured</h1>,
    children: [
      {
        index: true,
        element: <Course />,
      },
    ],
  },
  {
    path: QUIZ,
    element: <Quiz />,
    errorElement: <h1>An Error Has Occured</h1>,
  },
  {
    path: INSTRUCTIONS,
    element: <Instructions />,
    errorElement: <h1>An Error Has Occured</h1>,
  },

  {
    path: EACHCOURSE,
    element: (
      <ProtectedComponent>
        <Root />
      </ProtectedComponent>
    ),
    errorElement: <h1>An Error Has Occured</h1>,
    children: [
      {
        index: true,
        element: <EachCourseTopic />,
      },
    ],
  },
]);
const Router = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default Router;
