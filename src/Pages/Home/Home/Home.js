import React from 'react';
import Banner from '../Banner/Banner';
import Breakfast from '../Food/BreakFast/Breakfast';
import Dinner from '../Food/Dinner/Dinner';
import Lunch from '../Food/Lunch/Lunch';

const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <Breakfast></Breakfast>
        <Lunch></Lunch>
        <Dinner></Dinner>
      </div>
    );
};

export default Home;