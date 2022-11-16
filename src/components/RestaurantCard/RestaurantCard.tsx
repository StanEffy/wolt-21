import React from "react";
import { decode } from "blurhash";

interface Props {
  blurhash: string;
  launch_date: string;
  location: [number];
  name: string;
  online: boolean;
  popularity: number;
}

const RestaurantCard: React.FC<Props> = ({
  blurhash,
  launch_date,
  location,
  name,
  online,
  popularity,
}) => {
  const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", 32, 32);

  return <div></div>;
};

export default RestaurantCard;
