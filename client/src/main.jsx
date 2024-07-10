import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Login.jsx";
import SignPage from "./components/Sigin.jsx";

import { ThemeProvider } from "@material-tailwind/react";
import Dashboard from "./components/Dashboard.jsx";
import DBMS from "./components/DBMS.jsx";
import OS from "./components/OS.jsx";
import APPTITUDE from "./components/APPTITUDE.jsx";
import BEFA from "./components/BEFA.jsx";
import SE from "./components/SE.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sigin",
    element: <SignPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/dbms",
        element: <DBMS />,
      },
      {
        path: "/dashboard/os",
        element: <OS />,
      },
      {
        path: "/dashboard/apptitude",
        element: <APPTITUDE />,
      },
      {
        path: "/dashboard/se",
        element: <SE />,
      },
      {
        path: "/dashboard/befa",
        element: <BEFA />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
