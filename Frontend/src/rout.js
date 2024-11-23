import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Add from "./components/Add";
import Show from "./components/Show";
import Update from "./components/Update";

const customRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/show",
        element: <Show />,
      },
      {
        path: "/update",
        element: <Update />,
      },
    ],
  },
]);

export default customRoute;
