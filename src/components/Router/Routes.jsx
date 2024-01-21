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
import AllUser from "../Dashboard/Admin/AllUser";
import Modal from "../Dashboard/Admin/Modal";
import Add_a_test from "../Dashboard/Admin/Add_a_test";
import AllTeastas from "../Dashboard/Admin/AllTeastas";
import UpdateTest from "../Dashboard/Admin/UpdateTest";
import Reservation from "../Dashboard/Admin/Reservation";
import ReservationCARD from "../Dashboard/Admin/ReservationCARD";
import Payment from "../Payment/Payment";

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
          element: <PrivateRoute><AllTest></AllTest></PrivateRoute>,
        },
        {
          path: '/all-tests/:id',
          element: <PrivateRoute><TestDetails></TestDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/all-tests/${params.id}`)
        },
        {
          path: '/paymenst/:id',
          element: <PrivateRoute> <Payment></Payment> </PrivateRoute>,
        },
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoute> <DashBoard></DashBoard></PrivateRoute>,
      loader: () => fetch(`http://localhost:5000/users`),
      children:[
        {
          path: '/dashboard/profile/:id',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
        },
        {
          path: '/dashboard/appointments/:id',
          element: <PrivateRoute><UpcomingAppointments></UpcomingAppointments></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/appointments/${params.id}`)
        },
        {
          path: '/dashboard/test-results/:id',
          element: <PrivateRoute><TestResults></TestResults></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/appointments/${params.id}`)
        },
        {
          path: '/dashboard/all-users',
          element: <PrivateRoute><AllUser></AllUser></PrivateRoute>,
          loader: () => fetch(`http://localhost:5000/users`),
        },
        {
          path: '/dashboard/all-users/modal/:id',
          element: <Modal></Modal>,
          loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
        },
        {
          path: '/dashboard/add-a-test',
          element: <PrivateRoute><Add_a_test></Add_a_test></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
        },
        {
          path: '/dashboard/AllTeastas',
          element: <PrivateRoute><AllTeastas></AllTeastas></PrivateRoute>,
          loader: () => fetch(`http://localhost:5000/all-tests`),
        },
        {
          path: '/dashboard/update-test/:id',
          element: <PrivateRoute><UpdateTest></UpdateTest></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/all-tests/${params.id}`)
        },
        {
          path: '/dashboard/Reservation',
          element: <PrivateRoute><Reservation></Reservation></PrivateRoute>
        },
        {
          path: '/dashboard/Reservation/:id',
          element: <PrivateRoute><ReservationCARD></ReservationCARD></PrivateRoute>
        }

      ]
    }
  ]);