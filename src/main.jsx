import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyCreatedRouter from "./Routes/Router.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={MyCreatedRouter} />
    </React.StrictMode>
  </AuthProvider>
);
