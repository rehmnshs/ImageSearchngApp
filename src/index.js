import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom';
import App from "./App";
import searchImages from "./api";
import { SecondPage } from "./SecondPage";
import LoginPage from "./LoginPage";





const router = createBrowserRouter([

    {
        path:"/L",
        element: <LoginPage />,
    },
    {
        path:"/",
        element: <App />
    },
    {
       path:"/search/:id",
       element:<SecondPage />,
    },
 
]);


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<RouterProvider router={router}  />);
