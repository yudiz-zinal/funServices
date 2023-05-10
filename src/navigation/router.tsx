// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import Login from "src/screens/Auth/Login";
import AuthLayout from "src/layouts/AuthLayout";
import ForgotPassword from "src/screens/Auth/ForgotPassword";
import ResetPassword from "src/screens/Auth/ResetPassword";
import UserLayout from "src/layouts/UserLayout";
import Users from "src/screens/admin/Users";
import CreateUser from "src/screens/admin/CofrsAdmin/CreateUser";
import UserDetails from "src/screens/admin/UserDetails";
import UpdatePassword from "src/screens/admin/UpdatePassword";
import UserDetailsEdit from "src/screens/admin/UserDetailsEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      // {
      //     path: '',
      //     element: <Home />,
      // },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/create-user",
        element: <CreateUser />,
      },
      {
        path: "users/:uid",
        element: <UserDetails />,
      },
      {
        path: "users/:uid/edit",
        element: <UserDetailsEdit />,
      },
      {
        path: "users/:uid/update-password",
        element: <UpdatePassword />,
      },
    ],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //     path: '/phone-login',
      //     element: <PhoneLogin />,
      // },
      // {
      //     path: '/signup',
      //     element: <Signup />,
      // },
      // {
      //     path: '/send-reset-password-email',
      //     element: <SendResetPasswordEmail />,
      // },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  // {
  //     path: '/auth-action',
  //     element: <AuthAction />,
  // },
  // {
  //     path: '/verify-email',
  //     element: <VerifyEmail />,
  // },
]);
