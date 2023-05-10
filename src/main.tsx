import { render } from "preact";
import "./index.scss";
import { Router } from "src/navigation/router";
// import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/global.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// @ts-ignore
render(
  <RecoilRoot>
    <RecoilNexus />
    <Router />
    {/* <RouterProvider router={router} /> */}
    <ToastContainer />
  </RecoilRoot>,
  document.getElementById("app") as HTMLElement
);
