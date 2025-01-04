import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AllService from "../pages/AllService";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import BookedServices from "../pages/BookedServices";
import ServiceToDo from "../pages/ServiceToDo";
import Home from "../pages/Home";
import Login from "../pages/AuthLayout/Login";
import Registration from "../pages/AuthLayout/Registration";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allService',
          element: <AllService></AllService>
        },
        {
          path: '/addServiec',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/manageService',
          element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
        },
        {
          path: '/bookedServices',
          element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>
        },
        {
          path: '/serviceToDo',
          element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
        },
        {
          path: '/services/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        },
        {
          path: '/Login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        
      ],
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

 export default router;