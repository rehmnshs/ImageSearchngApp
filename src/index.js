import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import searchImages from "./api";
import { SecondPage } from "./SecondPage";
import LikedPage from "./pages/LikedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ":username/search/:id",
    element: <SecondPage />,
  },
  {
    path: "/:username/liked",
    element: <LikedPage />,
  },
]);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<RouterProvider router={router} />);
