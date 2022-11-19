import React, { useEffect, useState } from "react";
import RestaurantCarousel from "./RestaurantCarousel";
import { IRestaurant, IRestaurantsArray } from "../../../types";
import styled from "styled-components";
import ButtonScroll from "../Button/Button__Scroll";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { resetMaxSlides, sliceRestaurants } from "./utils";

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
  const { width } = useWindowDimensions();
  const [maxSlides, setMaxSlides] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);

  const [slicedRestaurants, setSlicedRestaurants] = useState<
    [] | IRestaurant[]
  >([]);

  useEffect(() => {
    console.log("it is active as well");
    resetMaxSlides(width, maxSlides, setMaxSlides);

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
    if (activeSlide + 1 == restaurants.length) {
      setActiveSlide(0);
    } else {
      setActiveSlide((prev) => prev + 1);
    }
  };
  const handleDecreaseActiveSlide = () => {
    if (activeSlide - 1 < 0) {
      setActiveSlide(restaurants.length - 1);
    } else {
      setActiveSlide((prev) => prev - 1);
    }
  };

  return (
    <section>
      <CarouselHeader>{title}</CarouselHeader>
      <CarouselCover>
        <ButtonScroll
          direction={"left"}
          visibility={!(maxSlides >= restaurants.length)}
          onClick={handleDecreaseActiveSlide}
        />
        <RestaurantCarousel restaurants={slicedRestaurants} width={width} />
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
