// @ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Restaurant from "./pages/SingleRestaurant/SingleRestaurant";
import { BrowserRouter as Router } from "react-router-dom";
import { RestaurantContext } from "./RestaurantContext";

test("without a context there are no restaurants", async () => {
  render(
    <Router>
      <Restaurant />
    </Router>
  );
  const noRestaurant = screen.getByText(
    /There is no restaurant like the one you were looking for/i
  );
  expect(noRestaurant).toBeInTheDocument();
});

const restaurantMock = {
  blurhash: "UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX",
  launch_date: "2020-04-20",
  location: [24.938082, 60.17626],
  name: "Sea Chain",
  online: true,
  popularity: 0.956990414084132,
};

const func = () => {};

test("actual restaurant header is displayed is there", async () => {
  render(
    <Router>
      <RestaurantContext.Provider
        value={{ activeRest: restaurantMock, setActive: func }}
      >
        <Restaurant />
      </RestaurantContext.Provider>
    </Router>
  );

  const restaurantHeader = screen.getByText(/Sea Chain/i);
  expect(restaurantHeader).toBeInTheDocument();
});
