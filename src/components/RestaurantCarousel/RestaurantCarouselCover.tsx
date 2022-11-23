import React, { useContext, useEffect, useState } from "react";
import RestaurantCarousel from "./RestaurantCarousel";
import { IRestaurant, IRestaurantsArray } from "../../../types";
import styled from "styled-components";
import ButtonScroll from "../Button/Button__Scroll";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { resetMaxSlides, sliceRestaurants } from "./utils";
import { RestaurantContext } from "../../RestaurantContext";

const CarouselHeader = styled.h1`
  font-size: 2rem;
`;
const CarouselCover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  const { width } = useWindowDimensions();
  const [cardHeight, setCardHeight] = useState(230);
  const [maxSlides, setMaxSlides] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);

  const lastElement = restaurants.length - 1;

  const [slicedRestaurants, setSlicedRestaurants] = useState<
    [] | IRestaurant[]
  >([]);

  useEffect(() => {
    resetMaxSlides(width, maxSlides, setMaxSlides, setCardHeight);

    setSlicedRestaurants((prev) =>
      sliceRestaurants(restaurants, maxSlides, activeSlide)
    );
  }, [width]);

  useEffect(() => {
    setSlicedRestaurants((prev) =>
      sliceRestaurants(restaurants, maxSlides, activeSlide)
    );
  }, [activeSlide, maxSlides]);

  const handleIncreaseActiveSlide = () => {
    if (activeSlide === restaurants.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide((prev) => prev + 1);
    }
  };
  const handleDecreaseActiveSlide = () => {
    if (activeSlide - 1 < 0) {
      setActiveSlide((prev) => (prev = lastElement));
    } else {
      setActiveSlide((prev) => prev - 1);
    }
  };

  return (
    <section>
      <CarouselHeader>{title}</CarouselHeader>
      <CarouselCover style={{ minHeight: `${cardHeight}px` }}>
        <ButtonScroll
          direction={"left"}
          visibility={!(maxSlides >= restaurants.length)}
          onClick={handleDecreaseActiveSlide}
        />
        <RestaurantCarousel
          title={title}
          restaurants={slicedRestaurants}
          width={width}
        />
        <ButtonScroll
          direction={"right"}
          visibility={!(maxSlides >= restaurants.length)}
          onClick={handleIncreaseActiveSlide}
        />
      </CarouselCover>
    </section>
  );
};

export default RestaurantCarouselCover;
