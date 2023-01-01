import React from "react";
import { useParams } from "react-router-dom";
import useFood from "../../../../hooks/useFood";

const FoodCategory = () => {
  const { categories } = useFood();
  const { foodCategory } = useParams();

  const displayFoods = categories?.find(
    (data) => data.category === foodCategory
  );
//   console.log(displayFoods);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mx-auto items-center container">
      {/* {displayFoods?.map((foods) => (
        <DisplayFoods key={displayFoods.category} foods={foods}></DisplayFoods>
      ))} */}
      {displayFoods?.items.map((food) => (
        <div key={food.id} className="w-5/6">
          <div className="bg-white rounded-lg hover:drop-shadow-2xl p-4 flex flex-col justify-between items-center">
            <img src={food.image} alt={food.name} className="w-48 rounded" />
            <div className="text-2xl text-center font-bold text-gray-800 my-2">
              {food.name}
            </div>
            <p className="text-gray-600 text-md my-2">{food.description}</p>
            <div className="text-xl font-bold text-gray-800">${food.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCategory;
