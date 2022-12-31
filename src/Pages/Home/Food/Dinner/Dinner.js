import React from 'react';
import useFood from '../../../../hooks/useFood';

const Dinner = () => {
    const { foods } = useFood();
  
  const breakfast = foods?.filter((food) => food.category === "dinner");

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 justify-center items-center">
      {breakfast?.map((food) => (
        <div className="w-5/6">
          <div className="bg-white rounded-lg hover:drop-shadow-2xl px-5 py-10 flex flex-col justify-between items-center">
            <img src={food.image} alt={food.name} className="w-48 rounded" />
            <div className="text-2xl text-center font-normal text-gray-800 my-2">
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

export default Dinner;