import React, { useContext } from "react";
import { FoodImageContext } from "../Storecontext/FoodImageContext";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ category }) {
  const { foodImages } = useContext(FoodImageContext);

  const filteredFoodItems =
    category === "All"
      ? foodImages
      : foodImages.filter((item) => item.category === category);

  return (
    <div className="food-desplay-container">
      <h1>Top dishes near you</h1>
      <div className="foodlistcontainer">
        {filteredFoodItems.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
