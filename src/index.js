import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/app/App";
import ErrorPage from "./components/errorPage/ErrorPage";
import LastStep from "./components/lastStep/LastStep";

import Step1 from "./components/step-1/Step1";
import Step2 from "./components/step-2/Step2";
import Step3 from "./components/step-3/Step3";
import Step4 from "./components/step-4/Step4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Step1 />, errorElement: <ErrorPage /> },
      { path: "/step-2", element: <Step2 />, errorElement: <ErrorPage /> },
      { path: "/step-3", element: <Step3 />, errorElement: <ErrorPage /> },
      { path: "/step-4", element: <Step4 />, errorElement: <ErrorPage /> },
      { path: "/step-5", element: <LastStep />, errorElement: <ErrorPage /> },
    ],

    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
