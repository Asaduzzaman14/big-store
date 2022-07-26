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

function App() {
  return (
    <Provider store={store}>
      <div>

        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>



        </Routes>

      </div>
    </Provider>
  );
}

export default App;
