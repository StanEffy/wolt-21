import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { IRestaurant } from "../../../types";

const RestaurantCarousel = ({
  restaurants,
  width,
}: {
  restaurants: IRestaurant[];
  width: number;
}) => {
  return (
    <>
      {restaurants.map((r, i) => (
        <RestaurantCard key={r.name} restaurant={r} width={width} />
      ))}
    </>
  );
};

export default RestaurantCarousel;
