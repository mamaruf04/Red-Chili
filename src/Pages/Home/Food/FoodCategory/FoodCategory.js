import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFood from "../../../../hooks/useFood";

const FoodCategory = () => {
  const { categories } = useFood();
  const { foodCategory } = useParams();
  const params = foodCategory || "breakfast";

  const navigate = useNavigate();

  const displayFoods = categories?.find((data) => data.category === params);
  //   console.log(displayFoods);

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1  mx-auto items-center  my-20">
        {displayFoods?.items.map((food) => (
          <div
            onClick={() => navigate(`foodDetails/${food.id}`)}
            key={food.id}
            className="w-5/6 mx-auto cursor-pointer"
          >
            <div className="bg-white rounded-lg md:drop-shadow-sm drop-shadow-md hover:drop-shadow-2xl my-4 p-4 flex flex-col justify-center items-center">
              <img src={food.image} alt={food.name} className="w-48 rounded" />
              <div className="text-2xl text-center font-bold text-gray-800 my-2">
                {food.name}
              </div>
              <p className="text-gray-600 text-md my-2">{food.description}</p>
              <div className="text-xl font-bold text-gray-800">
                ${food.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/checkout")}
        disabled
        className="flex  justify-center mb-20 mx-auto w-60 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 rounded-lg text-white font-medium"
        to="/checkout"
      >
        Checkout your food
      </button>
    </>
  );
};

export default FoodCategory;
