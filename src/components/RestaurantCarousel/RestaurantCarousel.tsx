import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { IRestaurant } from "../../../types";

const RestaurantCarousel = ({
  restaurants,
  width,
  title,
}: {
  restaurants: IRestaurant[];
  width: number;
  title: string;
}) => {
  return (
    <>
      {restaurants.map((r, i) => (
        <RestaurantCard key={r.name + title} restaurant={r} width={width} />
      ))}
    </>
  );
};

export default RestaurantCarousel;
