import React from "react";
import { Blurhash } from "react-blurhash";
import { IRestaurant } from "../../../types";

const RestaurantCard: React.FC<IRestaurant> = ({
  blurhash,
  launch_date,
  location,
  name,
  online,
  popularity,
}) => {
  return (
    <div>
      <Blurhash
        hash={blurhash}
        width={300}
        height={300}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <p>{name}</p>
      <p>{online ? "has delivery" : "only on site"}</p>
    </div>
  );
};

export default RestaurantCard;
