// @ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantCarousel from "./components/RestaurantCarousel/RestaurantCarousel";

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
    <RestaurantCarousel
      restaurants={restaurantMock}
      width={280}
      title={"mock"}
    />
  );
  const restName = screen.getByText(/Sea Chain/i);
  expect(restName).toBeInTheDocument();
});
