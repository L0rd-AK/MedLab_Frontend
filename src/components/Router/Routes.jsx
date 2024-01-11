import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/Home/Home";
import Login from "../Login-Register/Login";
import Register from "../Login-Register/Register";
import DashBoard from "../Dashboard/DashBoard";
import UpcomingAppointments from "../Dashboard/UpcomingAppointments";
import TestResults from "../Dashboard/TestResults";
import Profile from "../Dashboard/Profile";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
          loader: ()=>fetch('/countryData.json')
        },
      ]
    },
    {
      path:'/dashboard',
      element: <DashBoard></DashBoard>,
      children:[
        {
          path: '/dashboard/profile',
          element: <Profile></Profile>,
          loader: ()=>fetch('http://localhost:5000/users')
        },
        {
          path: '/dashboard/appointments',
          element: <UpcomingAppointments></UpcomingAppointments>
        },
        {
          path: '/dashboard/test-results',
          element: <TestResults></TestResults>
        }

      ]
    }
  ]);