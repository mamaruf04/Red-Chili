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
    <div className="flex  justify-center gap-60">
      <div className="w-1/3 p-10">
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
      <div className="w-1/3 p-10">
        <p className="flex justify-between">
          <span>Subtotal:</span> <span>${subtotal}</span>
        </p>
        <p className="flex justify-between">
          <span>Tax:</span> <span>${tax}</span>
        </p>
        <p className="flex justify-between">
          <span>Delivery fee:</span> <span>${deliveryFee}</span>
        </p>
        <p className="font-semibold text-xl flex justify-between">
          <span>Total:</span> <span>${total}</span>
        </p>
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
