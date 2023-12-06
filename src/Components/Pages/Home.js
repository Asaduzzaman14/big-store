import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../../layout/Navbar";
import Banner from "./Banner";
import Catagoris from "./Catagoris";
import GroupProducts from "./GroupProducts";
import Products from "./Products";
import Testmonial from "./Testmonial";

const Home = () => {
  return (
    <div className=' bg-accent'>
      <Banner></Banner>
      <div className='px-10 mx-auto'>
        <Catagoris></Catagoris>
        <Products></Products>
        <Testmonial></Testmonial>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
