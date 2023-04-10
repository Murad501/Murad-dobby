import { createBrowserRouter } from "react-router-dom";
// import Page404 from "../Components/Page404";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Page404 from "../Components/Page404";
import SignIn from "../Pages/SignIn/SignIn";
import Signup from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {},
]);
