import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layout/Root/Root";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import PrivetRouter from "./PrivetRouter";
import Assignments from "../Pages/Assignments/Assignments";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/CreateAssignments',
        element: <PrivetRouter><CreateAssignments></CreateAssignments></PrivetRouter>
      },
      {
        path: '/assignments',
        element: <Assignments></Assignments>
      },
      {
        path:'/PendingAssignment',
        element: <PendingAssignment></PendingAssignment>
      }
    ],
  },
]);

export default router;
