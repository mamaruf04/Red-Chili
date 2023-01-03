import React, { useState } from "react";

const items = [
  {
    id: 7,
    image: "https://i.ibb.co/GVkVvZq/lunch1.png",
    name: "Grilled Cheese Sandwich",
    description: "Melted cheese on toasted bread",
    price: 6.99,
    quantity: 1,
  },
  {
    id: 8,
    image: "https://i.ibb.co/TkSjfyw/lunch2.png",
    name: "Peanut Butter and Jelly Sandwich",
    description: "Peanut butter and jelly on toasted bread",
    price: 4.99,
    quantity: 1,
  },
  {
    id: 9,
    image: "https://i.ibb.co/YPkdbKf/lunch3.png",
    name: "Peanut Butter and Jelly Sandwich",
    description: "Peanut butter and jelly on toasted bread",
    price: 4.99,
    quantity: 1,
  },
  {
    id: 10,
    image: "https://i.ibb.co/fC47Z27/lunch4.png",
    name: "Peanut Butter and Jelly Sandwich",
    description: "Peanut butter and jelly on toasted bread",
    price: 4.99,
    quantity: 1,
  },
  {
    id: 11,
    image: "https://i.ibb.co/R753vqp/lunch5.png",
    name: "Peanut Butter and Jelly Sandwich",
    description: "Peanut butter and jelly on toasted bread",
    price: 4.99,
    quantity: 1,
  },
  {
    id: 12,
    image: "https://i.ibb.co/jHzhYC2/lunch6.png",
    name: "Soup and Salad Combo",
    description: "Cup of soup and a side salad",
    price: 7.99,
    quantity: 1,
  },
];

const MyComponent = ({ selectedCategory }) => {
  //   console.log(selectedFood);
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(Object.keys(items).length / itemsPerPage);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      {Object.entries(items)
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map(([key, value]) => (
          <div key={key}>{value}</div>
        ))}
      {page < totalPages && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default MyComponent;
