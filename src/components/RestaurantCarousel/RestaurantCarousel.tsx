import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { IRestaurant } from "../../../types";

const RestaurantCarousel = ({
  restaurants,
}: {
  restaurants: IRestaurant[];
}) => {
  return (
    <>
      {restaurants.map((r) => (
        <RestaurantCard
          key={r.name}
          blurhash={r.blurhash}
          launch_date={r.launch_date}
          location={r.location}
          name={r.name}
          online={r.online}
          popularity={r.popularity}
        />
      ))}
    </>
  );
};

export default RestaurantCarousel;
