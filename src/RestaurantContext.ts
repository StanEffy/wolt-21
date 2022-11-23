import { createContext } from "react";
import { IRestaurant } from "../types";

export const RestaurantContext = createContext<{
  activeRest: IRestaurant | null;
  setActive: (rest: IRestaurant) => void;
}>({ activeRest: null, setActive: () => {} });
