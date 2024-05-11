import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { ErrorPage } from "../Components/ErrorPage/ErrorPage";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { JobDetails } from "../Pages/JobDetails/JobDetails";
import axios from "axios";
import { Blogs } from "../Pages/Blogs/Blogs";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signUp",
          element: <Register />,
        },
        {
          path: "/jobDetails/:id",
          element: <JobDetails />,
          loader: ({params}) => axios(`${import.meta.env.VITE_API_URL}/postJobs/${params.id}`)
        },
        {
          path: '/blogs',
         element: <Blogs></Blogs>
        }
      ],
    },
  ]);