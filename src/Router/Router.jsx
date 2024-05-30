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
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import AttemptedAssignments from "../Pages/AttemptedAssignments/AttemptedAssignments";
import Profile from "../Pages/Profile/Profile";

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
        element: <Assignments></Assignments>,
        loader: () => fetch('https://studysquadron-server.vercel.app/assignmentCount')
      },
      {
        path:'/PendingAssignment',
        element: <PrivetRouter><PendingAssignment></PendingAssignment></PrivetRouter>
      },
      {
        path: '/UpdateAssignment/:id',
        element: <UpdateAssignment></UpdateAssignment>
      },
      {
        path: '/AssignmentDetails/:id',
        element: <PrivetRouter><AssignmentDetails></AssignmentDetails></PrivetRouter>
      },
      {
        path: '/AttemptedAssignments',
        element: <PrivetRouter><AttemptedAssignments></AttemptedAssignments></PrivetRouter>
      },
      {
        path: '/profile',
        element: <PrivetRouter><Profile></Profile></PrivetRouter>
      }
    ],
  },
]);

export default router;
