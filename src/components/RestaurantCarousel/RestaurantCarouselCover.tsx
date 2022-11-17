import React from "react";
import styled from "styled-components";
import RestaurantCarousel from "./RestaurantCarousel";
import { IRestaurantsArray } from "../../../types";

const CarouselHeader = styled(h1)`
  font-size: 2rem;
`;

const RestaurantCarouselCover: React.FC<IRestaurantsArray> = ({
  title,
  restaurants,
}) => {
  return (
    <section>
      <CarouselHeader></CarouselHeader>
      <RestaurantCarousel restaurants={} />
    </section>
  );
};

export default RestaurantCarouselCover;
