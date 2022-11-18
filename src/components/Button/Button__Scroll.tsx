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
`;

const Arrow = styled.div`
  display: block;
  width: 15px;
  height: 15px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-bottom: none;
  border-left: none;
  transform: rotate(45deg);
`;

const ButtonScroll = () => {
  return (
    <ButtonBlock>
      <Arrow />
    </ButtonBlock>
  );
};

export default ButtonScroll;
