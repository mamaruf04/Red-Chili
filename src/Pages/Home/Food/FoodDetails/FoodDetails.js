import React from "react";
import { useParams } from "react-router-dom";
import useFood from "../../../../hooks/useFood";

const FoodDetails = () => {
  const { categories } = useFood();
  const { foodCategory } = useParams();
  const { foodId } = useParams();
  const categoryParams = foodCategory || "breakfast";

  //   const [foods, setFoods] = useState([]);
  //   useEffect(() => {
  //     fetch("food.json")
  //       .then((res) => res.json())
  //       .then((data) => setFoods(data?.menu));
  //   }, []);


  // find the matched category.
  const selectedCategory = categories?.find(
    (selected) => selected.category === categoryParams
  );

  // find the matched food item.
  const selectedFood = selectedCategory?.items?.find(
    (singleFood) => singleFood.id === parseFloat(foodId)
  );

  return (
    <div>
      <div className="flex justify-center gap-10 w-11/12 max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-10 max-w-xl">
          <h1 className="text-6xl font-semibold">{selectedFood?.name}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, rem. Distinctio aliquam voluptatibus hic nisi explicabo at adipisci impedit quibusdam?</p>
          <h2 className="text-4xl font-semibold">${selectedFood?.price}</h2>
        </div>
        <div>
          <img width={"450px"} src={selectedFood?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
