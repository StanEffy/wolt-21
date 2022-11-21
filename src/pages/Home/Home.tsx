import React from "react";
import RestaurantCarouselCover from "../../components/RestaurantCarousel/RestaurantCarouselCover";
import { IRestaurantsArray } from "../../../types";

const Home = ({ restaurants }: { restaurants: IRestaurantsArray[] }) => {
  return (
    <>
      {restaurants.map((r) => (
        <RestaurantCarouselCover
          key={r.title}
          title={r.title}
          restaurants={r.restaurants}
        />
      ))}
    </>
  );
};

export default Home;
