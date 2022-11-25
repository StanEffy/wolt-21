import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render three lists", async () => {
  render(<App />);
  const headerElement = screen.getByText(/Restaurants/i);
  expect(headerElement).toBeInTheDocument();
});
