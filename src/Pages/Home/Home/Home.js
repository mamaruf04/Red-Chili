import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import FoodNavbar from "../Food/FoodNavbar/FoodNavbar";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <FoodNavbar></FoodNavbar>
        <Outlet></Outlet>
        <WhyUs></WhyUs>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
