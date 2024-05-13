import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { ErrorPage } from "../Components/ErrorPage/ErrorPage";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { JobDetails } from "../Pages/JobDetails/JobDetails";
import axios from "axios";
import { Blogs } from "../Pages/Blogs/Blogs";
import { AllJob } from "../Pages/AllJob/AllJob";
import { AddJob } from "../Pages/AddJob/AddJob";
import { PrivateRoute } from "./PrivateRoute";
import { MyJobs } from "../Pages/MyJobs/MyJobs";
import { UpdateJobs } from "../Pages/UpdateJobs/UpdateJobs";
import { AppliedJobs } from "../Pages/AppliedJobs/AppliedJobs";



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
          element: <PrivateRoute><JobDetails /></PrivateRoute>,
          loader: ({params}) => axios(`${import.meta.env.VITE_API_URL}/postJobs/${params.id}`)
        },
        {
          path: '/blogs',
         element: <Blogs></Blogs>
        },
        {
          path: '/all-jobs',
         element: <AllJob></AllJob>
        },
        {
          path: '/add-job',
         element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: '/my-jobs',
         element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
        },
        {
          path: '/update/:id',
         element: <PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>,
         loader: ({params}) => axios(`${import.meta.env.VITE_API_URL}/postJobs/${params.id}`)
        },
        {
          path: '/applied-jobs',
          element: <PrivateRoute> <AppliedJobs></AppliedJobs></PrivateRoute>
        },
      ],
    },
  ]);