import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import { IRestaurant } from "../../../types";
import styled from "styled-components";
import "./main.css";

type Props = {
  restaurant: IRestaurant;
  width: number;
};

const Card = styled.div`
  max-width: ${(props) => props.theme.tabletScreen};
  box-shadow: 1px 1px 11px 1px rgba(191, 121, 48, 0.15);
  border-bottom-left-radius: 10px;

  @media (max-width: ${(props) => props.theme.tabletScreen}) {
    min-width: 320px;
  }
  &:hover {
    box-shadow: 1px 1px 11px 1px rgba(191, 121, 48, 0.55);
  }
`;
const DescriptionCover = styled.div`
  margin-left: 15px;
`;

const Name = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
  //to avoid jump of the header when header is a two-liner
  min-height: 54px;
`;

const Status = styled.p<{ status: boolean }>`
  font-size: 12px;
  margin: 0;
  margin-bottom: 10px;
  color: ${(props) => (props.status ? "green" : "red")};
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
    <Card style={{ width: `${size}px` }} className={"slide"}>
      <Blurhash
        hash={blurhash}
        width={size}
        height={Math.floor((size / 16) * 9)}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <DescriptionCover>
        <Name>{name}</Name>
        <Status status={online}>{online ? "online" : "offline"}</Status>
      </DescriptionCover>
    </Card>
  );
};

export default RestaurantCard;
