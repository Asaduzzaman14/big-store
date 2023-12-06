import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import Dashboard from "../Components/Dashbord/Dashbord";
import AllOrder from "../Components/Dashbord/AllOrder";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <AllOrder />,
  //     },
  //   ],
  // },
]);

export default routes;
