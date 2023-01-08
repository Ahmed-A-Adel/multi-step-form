import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./components/app/App";
import ErrorPage from "./components/errorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Step1 from "./components/step-1/Step1";
import Step2 from "./components/step-2/Step2";
import Step3 from "./components/step-3/Step3";
import Step4 from "./components/step-4/Step4";

const Layout = () => {
  return (
    <App className="app">
      <Sidebar />
      <Outlet />
      <Footer />
    </App>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Step1 />, errorElement: <ErrorPage /> },
      { path: "/step-2", element: <Step2 />, errorElement: <ErrorPage /> },
      { path: "/step-3", element: <Step3 />, errorElement: <ErrorPage /> },
      { path: "/step-4", element: <Step4 />, errorElement: <ErrorPage /> },
    ],

    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
