import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { IRestaurant } from "../../../types";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const RestaurantCarousel = ({
  restaurants,
  width,
}: {
  restaurants: IRestaurant[];
  width: number;
}) => {
  return (
    <>
      {restaurants.map((r) => (
        <RestaurantCard key={r.name} restaurant={r} width={width} />
      ))}
    </>
  );
};

export default RestaurantCarousel;
