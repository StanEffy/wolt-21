import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import { IRestaurant } from "../../../types";
import styled from "styled-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type Props = {
  restaurant: IRestaurant;
  width: number;
};

const Card = styled.div`
  max-width: ${(props) => props.theme.tabletScreen};
  border: 1px solid ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.tabletScreen}) {
    min-width: 320px;
  }
`;

const RestaurantCard: React.FC<Props> = ({ restaurant, width }) => {
  const { blurhash, launch_date, location, name, online, popularity } =
    restaurant;

  const [size, setSize] = useState(210);

  useEffect(() => {
    if (width < 480) {
      if (size !== 320) {
        setSize(320);
      }
    } else if (width < 768) {
      if (size !== 210) {
        setSize(210);
      }
    } else if (width < 1024) {
      if (size !== 180) {
        setSize(180);
      }
    } else if (width < 1200) {
      if (size !== 200) {
        setSize(200);
      }
    } else if (width > 1200) {
      if (size !== 230) {
        setSize(230);
      }
    }
  }, [width]);

  return (
    <Card style={{ width: `${size}px` }}>
      <Blurhash
        hash={blurhash}
        width={size}
        height={Math.floor((size / 16) * 9)}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <p>{name}</p>
      <p>{online ? "online" : "offline"}</p>
    </Card>
  );
};

export default RestaurantCard;
