import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Employer from "./pages/Employer";
import Job from "./pages/Job";
import EmployeeCreate from "./pages/Create";
import EmployeeDetail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/employees",
        element: <Employee></Employee>,
      },
      {
        path: "/employees/create",
        element: <EmployeeCreate></EmployeeCreate>,
      },
      {
        path: "/employees/detail/:id",
        element: <EmployeeDetail></EmployeeDetail>,
      },
      {
        path: "/employer",
        element: <Employer></Employer>,
      },
      {
        path: "/job",
        element: <Job></Job>,
      },
    ],
  },
]);

export default router;
