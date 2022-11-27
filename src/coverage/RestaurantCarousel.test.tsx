//@ts-nocheck
import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import RestaurantCarousel from "../components/RestaurantCarousel/RestaurantCarousel";
import { BrowserRouter as Router } from "react-router-dom";
import { RestaurantContext } from "../RestaurantContext";

const restaurantMock = [
  {
    blurhash: "UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX",
    launch_date: "2020-04-20",
    location: [24.938082, 60.17626],
    name: "Sea Chain",
    online: true,
    popularity: 0.956990414084132,
  },
];

test("restaurant in rendered", async () => {
  render(
    <Router>
      <RestaurantContext.Provider
        value={{ activeRest: restaurantMock[0], setActive: () => {} }}
      >
        <RestaurantCarousel
          restaurants={restaurantMock}
          width={280}
          title={"mock"}
        />
      </RestaurantContext.Provider>
    </Router>
  );
  const restName = screen.getByText(/Sea Chain/i);
  expect(restName).toBeInTheDocument();
});
