import React from "react";
import { Blurhash } from "react-blurhash";
import { IRestaurant } from "../../../types";
import styled from "styled-components";

const Card = styled.div`
  max-width: ${(props) => props.theme.tabletScreen};
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const RestaurantCard: React.FC<IRestaurant> = ({
  blurhash,
  launch_date,
  location,
  name,
  online,
  popularity,
}) => {
  return (
    <Card>
      <Blurhash
        hash={blurhash}
        width={480}
        height={270}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <p>{name}</p>
      <p>{online ? "has delivery" : "only on site"}</p>
    </Card>
  );
};

export default RestaurantCard;
