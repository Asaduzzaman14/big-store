import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import AllOrder from "../Components/Dashbord/AllOrder";
import AllProducts from "../Components/Dashbord/AllProducts";
import Dashboard from "../layout/Dashboard";
import AddProduct from "../Components/Dashbord/AddProduct";
import AllUsers from "../Components/Dashbord/AllUsers";
import AllReview from "../Components/Dashbord/AllReview";
import BuyProduct from "../Components/Pages/BuyProduct";
import AllCatagory from "../Components/Pages/AllCatagory";
import Blogs from "../Components/Pages/Blogs";
import Cart from "../Components/Pages/Cart";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";

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
      {
        path: "allcatagory",
        element: <AllCatagory />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "Product/:id",
        element: <BuyProduct />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "dashboard",
        element: <AllOrder />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "allOrders",
        element: <AllOrder />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "allreviews",
        element: <AllReview />,
      },
      {
        path: "allproducts",
        element: <AllProducts />,
      },
    ],
  },
]);

export default routes;
