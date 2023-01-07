import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import useFood from "../../../../hooks/useFood";
import "./FoodDetails.css";

const FoodDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [page, setPage] = useState(1);
  const { categories } = useFood();
  const { foodCategory } = useParams();
  const { foodId } = useParams();
  const { cart, setCart, itemsId } = useCart();
  const categoryParams = foodCategory || "breakfast";
  const navigate = useNavigate();

  // find the matched category.
  const selectedCategory = categories?.find(
    (selected) => selected.category === categoryParams
  );

  const selectedItems = selectedCategory?.items;

  // find the matched food item.
  const selectedFood = selectedItems?.find(
    (singleFood) => singleFood.id === parseFloat(foodId)
  );

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (food, qty) =>{
    itemsId(food, qty);
    setCart([...cart, food])
    setQuantity(1);
  }

  // two suggested food bellow the details of food
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
          <h1 className="md:text-6xl text-4xl font-semibold">
            {selectedFood?.name}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
            rem. Distinctio aliquam voluptatibus hic nisi explicabo at adipisci
            impedit quibusdam?
          </p>
          <div className="flex  gap-5">
            <h2 className="md:text-4xl text-3xl font-semibold">
              ${(selectedFood?.price * selectedFood?.quantity).toFixed(2)}
            </h2>
            <div className="flex items-center border rounded-full">
              <button
                className="px-3 py-2 font-bold text-lg"
                onClick={handleDecrease}
              >
                <MinusIcon
                  className={
                    selectedFood?.quantity > 1
                      ? "h-6 w-6 text-[#F91944] hover:text-[#e10d37]"
                      : "h-6 w-6"
                  }
                />
              </button>
              <span className="px-3 py-2 text-lg font-semibold">
                {quantity}
              </span>
              <button
                className="px-3 py-2 font-bold text-lg"
                onClick={handleIncrease}
              >
                <PlusIcon className="h-6 w-6 text-[#F91944] hover:text-[#e10d37]" />
              </button>
            </div>
          </div>
          <Link
            onClick={() => handleAddToCart(selectedFood, quantity)}
            className="w-36 mb-10 py-2 border rounded-full bg-[#F91944] hover:bg-[#e10d37] text-white"
          >
            <div className="flex justify-center items-center gap-2">
              <ShoppingCartIcon className="h-6 w-6" />
              <span>Add to cart</span>
            </div>
          </Link>

          {/* <p className="text-gray-600">Relative foods <hr /></p> */}
          <div className=" flex justify-start items-center overflow-scroll overflow-y-hidden gap-2">
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
