import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { IRestaurant, IRestaurantsArray } from "../../../types";

const RestaurantCarousel: React.FC<IRestaurant[]> = (restaurants) => {
  return restaurants.map((r) => (
    <RestaurantCard
      blurhash={r.blurhash}
      launch_date={r.launch_date}
      location={r.location}
      name={r.name}
      online={r.online}
      popularity={r.popularity}
    />
  ));
};

export default RestaurantCarousel;
