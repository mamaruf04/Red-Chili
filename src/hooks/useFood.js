import { useEffect, useState } from 'react';

const useFood = () => {

    const [categories, setCategories] = useState();

    useEffect(() =>{
        fetch("https://mocki.io/v1/3054a218-1178-46d6-9d54-aeeeba2778f0")
          .then((res) => res.json())
          .then((data) => setCategories(data?.menu));
    },[])

    return { categories, setCategories };
};

export default useFood;