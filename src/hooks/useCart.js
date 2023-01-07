import { useEffect, useState } from "react";

const useCart = () => {
  // const { allItems } = useFood();
  const [cart, setCart] = useState([]);
  //   const [itemsId, setItemsId] = useState({});

   useEffect(() => {
     const storedCart = localStorage.getItem("cart");
     if (storedCart) {
       setCart(JSON.parse(storedCart));
     }
   }, []);

   useEffect(() => {
     localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);

  const itemsId = (food, qty) => {
    
    // const selectedCart = allItems?.find((item) => item.id === food?.id);
    if (food) {
      setCart([...cart, food]);
    }
    // console.log(cart);
  };

  console.log(cart);

  return { cart, setCart, itemsId };
};

export default useCart;
