//@ts-nocheck
import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import RestaurantCarousel from "../components/RestaurantCarousel/RestaurantCarousel";
import { BrowserRouter as Router } from "react-router-dom";
import { RestaurantContext } from "../RestaurantContext";
import {restaurantMockData} from "../restaurantMockData";

test("restaurant in rendered", async () => {
  render(
    <Router>
      <RestaurantContext.Provider
        value={{ activeRest: restaurantMockData[0], setActive: () => {} }}
      >
        <RestaurantCarousel
          restaurants={restaurantMockData}
          width={280}
          title={"mock"}
        />
      </RestaurantContext.Provider>
    </Router>
  );
  const restName = screen.getByText(/Sea Chain/i);
  expect(restName).toBeInTheDocument();
});
