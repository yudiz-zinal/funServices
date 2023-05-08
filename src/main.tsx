import { render } from "preact";
import "./index.scss";
import { router } from "./navigation/router";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import "bootstrap/dist/css/bootstrap.min.css";

// @ts-ignore
render(
  <RecoilRoot>
    <>
      <RecoilNexus />
      <RouterProvider router={router} />
    </>
  </RecoilRoot>,
  document.getElementById("app") as HTMLElement
);
