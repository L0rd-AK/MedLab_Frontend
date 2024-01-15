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
import PrivateRoute from "../Private-route/PrivateRoute";
import AllTest from "../Pages/AllTest";
import TestDetails from "../Pages/TestDetails";

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
        {
          path: '/all-tests',
          element: <AllTest></AllTest>,
          loader: ()=>fetch('/countryData.json')
        },
        {
          path: '/all-tests/:id',
          element: <PrivateRoute><TestDetails></TestDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/all-tests/${params.id}`)
        },
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoute> <DashBoard></DashBoard> </PrivateRoute>,
      children:[
        {
          path: '/dashboard/profile/:id',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
        },
        {
          path: '/dashboard/appointments/:id',
          element: <UpcomingAppointments></UpcomingAppointments>,
          loader: ({params})=>fetch(`http://localhost:5000/appointments/${params.id}`)
        },
        {
          path: '/dashboard/test-results',
          element: <TestResults></TestResults>
        }

      ]
    }
  ]);