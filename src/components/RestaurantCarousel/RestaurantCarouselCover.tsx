import React from "react";
import RestaurantCarousel from "./RestaurantCarousel";
import { IRestaurantsArray } from "../../../types";
import styled from "styled-components";

const CarouselHeader = styled.h1`
  font-size: 2rem;
`;

const RestaurantCarouselCover: React.FC<IRestaurantsArray> = ({
  title,
  restaurants,
}) => {
  return (
    <section>
      <CarouselHeader>{title}</CarouselHeader>
      <RestaurantCarousel restaurants={restaurants} />
    </section>
  );
};

export default RestaurantCarouselCover;
