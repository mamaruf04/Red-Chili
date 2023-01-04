import { useEffect, useState } from "react";

const useFood = () => {
  const [categories, setCategories] = useState();

  // api 1: https://api.jsonbin.io/v3/b/63b5bb4c15ab31599e2cd7ce
  // api 2: https://mocki.io/v1/3054a218-1178-46d6-9d54-aeeeba2778f0
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/63b5bb4c15ab31599e2cd7ce")
      .then((res) => res.json())
      .then((data) => setCategories(data?.record.menu));
  }, []);

  return { categories, setCategories };
};

export default useFood;
