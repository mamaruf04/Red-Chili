import { useEffect, useState } from 'react';

const useFood = () => {

    const [categories, setCategories] = useState();

    useEffect(() =>{
        fetch("food.json")
          .then((res) => res.json())
          .then((data) => setCategories(data?.menu));
    },[])

    return { categories, setCategories };
};

export default useFood;