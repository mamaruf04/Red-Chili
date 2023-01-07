import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Checkout = () => {
  const [delivery, setDelivery] = useState({
    deliveryType: "",
    address: "",
    flatAndHouseNumber: "",
    businessName: "",
    deliveryInstruction: "",
  });
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(1);

  
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDelivery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Calculate subtotal, tax, and total
    setSubtotal(100);
    setTax(10);
    setDeliveryFee(10);
    setTotal(120);
  };

  return (
    <div className="md:flex max-w-7xl flex-warp justify-center gap-60">
      <div className="md:w-1/3 w-full p-8">
        <h2 className="font-semibold text-2xl py-2">Edit Delivery Details</h2>
        <hr />
        <form className="mt-4 flex flex-col" onSubmit={handleSubmit}>
          <input
            className="p-2 w-full bg-gray-100 rounded-lg"
            placeholder="Delivery to Door"
            type="text"
            name="deliveryType"
            value={delivery.deliveryType}
            onChange={handleChange}
          />
          <br />
          <input
            className="p-2 w-full bg-gray-100 rounded-lg"
            placeholder="Address"
            type="text"
            name="address"
            value={delivery.address}
            onChange={handleChange}
          />
          <br />
          <input
            className="p-2 w-full bg-gray-100 rounded-lg"
            placeholder="Flat, Suite or floor"
            type="text"
            name="flatAndHouseNumber"
            value={delivery.flatAndHouseNumber}
            onChange={handleChange}
          />
          <br />
          <input
            className="p-2 w-full bg-gray-100 rounded-lg"
            placeholder="Business Name"
            type="text"
            name="businessName"
            value={delivery.businessName}
            onChange={handleChange}
          />
          <br />
          <input
            className="p-2 w-full bg-gray-100 rounded-lg"
            placeholder="Add delivery instruction"
            type="text"
            name="deliveryInstruction"
            value={delivery.deliveryInstruction}
            onChange={handleChange}
          />
          <br />
          <button
            className="p-2 w-full bg-[#F91944] rounded-lg text-white"
            type="submit"
          >
            Save and Continue
          </button>
        </form>
      </div>
      <div className="md:w-1/3 w-full p-10">
        <div className="flex flex-col gap-3">
          <div className="flex w-full p-4 justify-between items-center bg-gray-100 rounded-xl">
            <img
              className="rounded-full w-16 h-16 "
              src="https://i.ibb.co/nB6y9Mq/lunch5.png"
              alt=""
            />
            <div>
              <h3 className="font-semibold text-lg leading-5">Grilled Chicken</h3>
              <h2 className="font-bold text-2xl text-[#F91944]">$8.50</h2>
              <p className="text-sm text-gray-400">$1.20</p>
            </div>

            {/*quantity counter */}
            <div>
              <div className="flex items-center border rounded-full">
                <button className="px-2 py-1 text-md" onClick={handleDecrease}>
                  <MinusIcon
                    className={
                      count > 1
                        ? "h-4 w-4 text-[#F91944] hover:text-[#e10d37]"
                        : "h-4 w-4"
                    }
                  />
                </button>
                <span className="px-1 py-1 text-md font-semibold">{count}</span>
                <button className="px-3 py-2 text-lg" onClick={handleIncrease}>
                  <PlusIcon className="h-4 w-4 text-[#F91944] hover:text-[#e10d37]" />
                </button>
              </div>
            </div>
            {/* quantity counter close */}
          </div>
        </div>
        <div className="px-2 flex flex-col gap-1">
          <p className="flex justify-between">
            <span>Subtotal</span> <span>$9.70</span>
            {/* <span>Subtotal</span> <span>${subtotal}</span> */}
          </p>
          <p className="flex justify-between">
            <span>Tax</span> <span>$0.5</span>
            {/* <span>Tax</span> <span>${tax}</span> */}
          </p>
          <p className="flex justify-between">
            <span>Delivery fee</span> <span>$1.20</span>
            {/* <span>Delivery fee</span> <span>${deliveryFee}</span> */}
          </p>
          <p className="font-semibold text-xl flex justify-between">
            <span>Total</span> <span>$11.40</span>
            {/* <span>Total</span> <span>${total}</span> */}
          </p>
        </div>
        <button
          className="p-2 mt-4 w-full bg-[#F91944] rounded-lg text-white"
          type="submit"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
