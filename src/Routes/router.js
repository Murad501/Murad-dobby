import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Page404 from "../Components/Page404";
import SignIn from "../Pages/SignIn/SignIn";
import Signup from "../Pages/SignUp/SignUp";
import UploadImage from "../Pages/UploadImage/UploadImage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/upload",
        element: <PrivateRoute><UploadImage></UploadImage></PrivateRoute>,
      },
    ],
  },
  {},
]);
