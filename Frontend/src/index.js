import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import customRoute from './rout';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={customRoute} />);