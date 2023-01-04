import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFood from "../../../../hooks/useFood";
import "./FoodDetails.css";

const FoodDetails = () => {
  const [count, setCount] = useState(1);
  const { categories } = useFood();
  const { foodCategory } = useParams();
  const { foodId } = useParams();
  const categoryParams = foodCategory || "breakfast";
  const navigate = useNavigate();

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // find the matched category.
  const selectedCategory = categories?.find(
    (selected) => selected.category === categoryParams
  );

  const selectedItems = selectedCategory?.items;

  console.log(selectedItems?.length);

  // find the matched food item.
  const selectedFood = selectedItems?.find(
    (singleFood) => singleFood.id === parseFloat(foodId)
  );

  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(selectedItems?.length / itemsPerPage);
  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <div className="flex md:flex-nowrap flex-wrap justify-center gap-10 w-11/12 max-w-5xl mx-auto">
        <div className="order-2 md:order-1 flex flex-col gap-6 px-10 max-w-xl">
          <h1 className="md:text-6xl text-4xl font-semibold">{selectedFood?.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
            rem. Distinctio aliquam voluptatibus hic nisi explicabo at adipisci
            impedit quibusdam?
          </p>
          <div className="flex  gap-5">
            <h2 className="md:text-4xl text-3xl font-semibold">
              ${(selectedFood?.price * count).toFixed(2)}
            </h2>
            <div className="flex items-center border rounded-full">
              <button
                className="px-3 py-2 font-bold text-lg"
                onClick={handleDecrease}
              >
                <MinusIcon
                  className={
                    count > 1
                      ? "h-6 w-6 text-[#F91944] hover:text-[#e10d37]"
                      : "h-6 w-6"
                  }
                />
              </button>
              <span className="px-3 py-2 text-lg font-semibold">{count}</span>
              <button
                className="px-3 py-2 font-bold text-lg"
                onClick={handleIncrease}
              >
                <PlusIcon className="h-6 w-6 text-[#F91944] hover:text-[#e10d37]" />
              </button>
            </div>
          </div>
          <button className="w-36 mb-10 py-2 border rounded-full bg-[#F91944] hover:bg-[#e10d37] text-white">
            <div className="flex justify-center items-center gap-2">
              <ShoppingCartIcon className="h-6 w-6" />
              <span>Add to cart</span>
            </div>
          </button>

          {/* <p className="text-gray-600">Relative foods <hr /></p> */}
          <div className=" flex justify-start items-center overflow-scroll overflow-y-hidden gap-2">
            {/* {selectedCategory?.items?.map((relate) => (
              <div key={relate?.id} onClick={() => navigate(`${relate.id}`)}>
                <img className="w-36" src={relate?.image} alt="" />
                <p className="w-36 font-semibold text-center">
                  <small>{relate?.name}</small>
                </p>
              </div>
            ))} */}

            <div className="flex justify-center items-center">
              <ChevronLeftIcon
                onClick={handlePrevious}
                className="h-10 w-10 p-2 cursor-pointer"
              ></ChevronLeftIcon>
              {selectedItems
                ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((item, index) => (
                  <div
                    className="mx-2"
                    key={index}
                    onClick={() => navigate(`${item.id}`)}
                  >
                    <img className="w-36" src={item?.image} alt="" />
                    {/* <p className="text-center p-2 font-semibold">
                      {item?.name}
                    </p> */}
                  </div>
                ))}
              <ChevronRightIcon
                onClick={handleNext}
                className="h-10 w-10 p-2 cursor-pointer"
              ></ChevronRightIcon>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img className="md:w-[550px] w-64" src={selectedFood?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
