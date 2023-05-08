import { render } from "preact";
import "./index.scss";
import { router } from "src/navigation/router";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/global.scss"

// @ts-ignore
render(
  <RecoilRoot>
    <RecoilNexus />
    <RouterProvider router={router} />
  </RecoilRoot>,
  document.getElementById("app") as HTMLElement
);
