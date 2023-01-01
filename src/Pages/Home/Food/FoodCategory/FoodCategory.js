import React from "react";
import { useParams } from "react-router-dom";
import useFood from "../../../../hooks/useFood";
import DisplayFoods from "../DisplayFoods/DisplayFoods";

const FoodCategory = () => {
  const { categories } = useFood();
  const { foodCategory } = useParams();

  const displayFoods = categories?.filter(
    (data) => data.category === foodCategory
  );

  return (
    <div>
      <h1>This is food category : {foodCategory}</h1>
      {displayFoods?.map(foods => <DisplayFoods foods = {foods}></DisplayFoods>
      )}
    </div>
  );
};

export default FoodCategory;
