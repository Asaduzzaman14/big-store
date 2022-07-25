import Home from "./Components/Pages/Home";
import Navbar from "./Components/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/Pages/About";
import Blogs from "./Components/Pages/Blogs";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>

      </Routes>
    </div>
  );
}

export default App;
