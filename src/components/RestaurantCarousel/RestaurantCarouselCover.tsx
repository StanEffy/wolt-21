import React, { useEffect, useState } from "react";
import RestaurantCarousel from "./RestaurantCarousel";
import { IRestaurant, IRestaurantsArray } from "../../../types";
import styled from "styled-components";
import ButtonScroll from "../Button/Button__Scroll";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { sliceRestaurants } from "./utils";

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
    if (width > 1024) {
      if (maxSlides !== 2) {
        setMaxSlides(5);
      }
    } else if (width > 820) {
      if (maxSlides !== 4) {
        setMaxSlides(4);
      }
    } else if (width > 768) {
      if (maxSlides !== 3) {
        setMaxSlides(3);
      }
    } else if (width > 480) {
      if (maxSlides !== 2) {
        setMaxSlides(2);
      }
    }

    console.log(maxSlides);
    setSlicedRestaurants((prev) =>
      sliceRestaurants(restaurants, maxSlides, activeSlide)
    );
  }, [width]);

  return (
    <section>
      <CarouselHeader>{title}</CarouselHeader>
      <CarouselCover>
        <ButtonScroll
          direction={"left"}
          visibility={!(maxSlides >= restaurants.length)}
        />
        <RestaurantCarousel restaurants={slicedRestaurants} width={width} />
        <ButtonScroll
          direction={"right"}
          visibility={!(maxSlides >= restaurants.length)}
        />
      </CarouselCover>
    </section>
  );
};

export default RestaurantCarouselCover;
