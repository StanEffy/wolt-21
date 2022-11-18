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
  gap: 15px;
  padding-left: 30px;
  padding-right: 30px;
`;

const RestaurantCarouselCover: React.FC<IRestaurantsArray> = ({
  title,
  restaurants,
}) => {
  return (
    <section>
      <CarouselHeader>{title}</CarouselHeader>
      <CarouselCover>
        <ButtonScroll direction={"left"} visibility={true} />
        <RestaurantCarousel restaurants={restaurants} />
        <ButtonScroll direction={"right"} visibility={true} />
      </CarouselCover>
    </section>
  );
};

export default RestaurantCarouselCover;
