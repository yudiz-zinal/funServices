// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
// import Home from 'screens/Home';
// import Users from 'screens/admin/Users';
// import UserDetails from 'screens/admin/UserDetails';
// import UpdatePassword from 'screens/admin/UpdatePassword';
// import CreateUser from 'screens/admin/CreateUser';
import Login from "src/screens/Auth/Login";
import AuthLayout from "src/layouts/AuthLayout";
import ForgotPassword from "src/screens/Auth/ForgotPassword";
import ResetPassword from "src/screens/Auth/ResetPassword";
// import PhoneLogin from 'screens/Auth/PhoneLogin';
// import Signup from 'screens/Auth/Signup';
// import SendResetPasswordEmail from 'screens/Auth/SendResetPasswordEmail';
// import AuthAction from 'screens/Auth/AuthAction';
// import VerifyEmail from 'screens/Auth/VerifyEmail';

export const router = createBrowserRouter([
  // {
  //     path: '/',
  //     element: <UserLayout />,
  //     // children: [
  //     //     {
  //     //         path: '',
  //     //         element: <Home />,
  //     //     },
  //     //     {
  //     //         path: 'users',
  //     //         element: <Users />,
  //     //     },
  //     //     {
  //     //         path: 'users/create-user',
  //     //         element: <CreateUser />,
  //     //     },
  //     //     {
  //     //         path: 'users/:uid',
  //     //         element: <UserDetails />,
  //     //     },
  //     //     {
  //     //         path: 'users/:uid/update-password',
  //     //         element: <UpdatePassword />,
  //     //     },
  //     // ],
  // },
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
