import Home from "./Components/Pages/Home";
import Navbar from "./Components/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/Pages/About";
import Blogs from "./Components/Pages/Blogs";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Cart from "./Components/Pages/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import BuyProduct from "./Components/Pages/BuyProduct";
import Dashbord from "./Components/Dashbord/Dashbord";
import AddProduct from "./Components/Dashbord/AddProduct";
import AllOrder from "./Components/Dashbord/AllOrder";
import AllUsers from "./Components/Dashbord/AllUsers";
import AllReview from "./Components/Dashbord/AllReview";
import AllCatagory from "./Components/Pages/AllCatagory";
import AllProducts from "./Components/Dashbord/AllProducts";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/allcatagory' element={<AllCatagory />}></Route>

          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blogs />}></Route>
          <Route path='/cart' element={<Cart />}></Route>

          <Route path='/Product/:id' element={<BuyProduct />}></Route>

          <Route path='/dashborad' element={<Dashbord />}>
            <Route index element={<AddProduct />}></Route>
            <Route path='addproduct' element={<AddProduct />}></Route>
            <Route path='allOrders' element={<AllOrder />}></Route>
            <Route path='allUsers' element={<AllUsers />}></Route>
            <Route path='allreviews' element={<AllReview />}></Route>
            <Route path='allproducts' element={<AllProducts />}></Route>
          </Route>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
