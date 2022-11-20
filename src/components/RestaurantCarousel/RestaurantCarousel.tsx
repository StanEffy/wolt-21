import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { IRestaurant } from "../../../types";

const RestaurantCarousel = ({
  restaurants,
  width,
  visibleRestaurants,
}: {
  restaurants: IRestaurant[];
  visibleRestaurants: string[];
  width: number;
}) => {
  return (
    <>
      {restaurants.map((r) => (
        <RestaurantCard
          display={visibleRestaurants.includes(r.name) ? "block" : "none"}
          key={r.name}
          restaurant={r}
          width={width}
        />
      ))}
    </>
  );
};

export default RestaurantCarousel;
