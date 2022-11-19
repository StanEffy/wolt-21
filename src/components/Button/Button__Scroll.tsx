import React from "react";
import styled from "styled-components";

const ButtonBlock = styled.button`
  position: absolute;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
  background-color: rgba(33, 98, 120, 0.2);
  z-index: 1;

  &:hover {
    background-color: rgba(33, 98, 120, 0.35);
  }
`;

const Arrow = styled.div`
  display: block;
  position: relative;
  left: 5px;
  width: 15px;
  height: 15px;
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-bottom: none;
  border-left: none;
`;

const ArrowRight = styled(Arrow)`
  transform: rotate(45deg);
  left: -5px;
`;

const ArrowLeft = styled(Arrow)`
  transform: rotate(-135deg);
`;

const ButtonScroll = ({
  direction,
  visibility = true,
  onClick,
}: {
  direction: "left" | "right";
  visibility: boolean;
  onClick: () => void;
}) => {
  return (
    <ButtonBlock
      onClick={() => onClick()}
      style={{
        right: direction === "right" ? 0 : "auto",
        left: direction === "left" ? 0 : "auto",
        display: visibility ? "flex" : "none",
      }}
    >
      {direction === "left" ? <ArrowLeft /> : <ArrowRight />}
    </ButtonBlock>
  );
};

export default ButtonScroll;
