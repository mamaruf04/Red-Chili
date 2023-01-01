import React from "react";
import { Link } from "react-router-dom";
import useFood from "../../../../hooks/useFood";

const FoodNavbar = () => {
  const { categories } = useFood();
  
  return (
    <div>
      <h1>this is food navbar.</h1>
      {categories?.map((category) => (
        <Link key={category.category} to={category.category}>{category.category} </Link>
      ))}
    </div>
  );
};

export default FoodNavbar;
