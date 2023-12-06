import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import routes from "./routes/router";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
/* 
localStoragell;

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
            <Route index element={<AdminPanel />}></Route>
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

kk */
