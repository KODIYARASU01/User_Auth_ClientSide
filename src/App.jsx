import React from "react";
import "./App.css";
import UserName from "./components/UserName";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Password from "./components/Password";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthorizeUser,ProtectRoute } from "./midleware/auth";
import Card from "./components/DigitalCard/Card";
import Navbar from "./components/DigitalCard/Navbar";
let router = createBrowserRouter([
  { 
    path: "/",
    element: <UserName />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/profile",
    element: (
      <AuthorizeUser>
        {" "}
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: "/password",
    element: <ProtectRoute><Password /></ProtectRoute>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/page-not-found",
    element: <PageNotFound />,
  },
  {
    path:'/home',
    element:<Card/>
  },
  {
    path:'/navbar',
    element:<Navbar/>
  }
]);
const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
