import React from "react";
import RestaurantCarousel from "./RestaurantCarousel";
import { IRestaurantsArray } from "../../../types";
import styled from "styled-components";
import ButtonScroll from "../Button/Button__Scroll";

const CarouselHeader = styled.h1`
  font-size: 2rem;
`;
const CarouselCover = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
`;

const RestaurantCarouselCover: React.FC<IRestaurantsArray> = ({
  title,
  restaurants,
}) => {
  return (
    <section>
      <CarouselHeader>{title}</CarouselHeader>
      <CarouselCover>
        <ButtonScroll direction={"left"} />
        <RestaurantCarousel restaurants={restaurants} />
        <ButtonScroll direction={"right"} />
      </CarouselCover>
    </section>
  );
};

export default RestaurantCarouselCover;
