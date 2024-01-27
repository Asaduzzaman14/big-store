import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Catagoris from "./Catagoris";
import Products from "./Products";
import Testmonial from "./Testmonial";
import LatestBlog from "../UI/LatestBlog";

const Home = () => {
  return (
    <div className=' bg-accent'>
      <Banner></Banner>
      <div className='px-5 lg:px-10 mx-auto'>
        <Catagoris></Catagoris>
        <Products></Products>
        <Testmonial></Testmonial>
        <LatestBlog />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
