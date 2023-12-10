import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Catagoris from "./Catagoris";
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
