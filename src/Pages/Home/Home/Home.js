import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import FoodNavbar from '../Food/FoodNavbar/FoodNavbar';

const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <FoodNavbar></FoodNavbar>
        <Outlet></Outlet>
        {/* <FoodNavbar></FoodNavbar> */}
      </div>
    );
};

export default Home;