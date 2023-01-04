import React from "react";
import { NavLink } from "react-router-dom";
import useFood from "../../../../hooks/useFood";

const FoodNavbar = () => {
  const { categories } = useFood();
  
  return (
    <div className="md:text-xl text-md text-center md:font-bold font-semibold md:my-20 my-10">
      {categories?.map((category) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 rounded-md border-red-500 md:mx-6 mx-2 uppercase" : "md:mx-6 mx-2 uppercase"
          }
          key={category.category}
          to={category.category}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default FoodNavbar;
