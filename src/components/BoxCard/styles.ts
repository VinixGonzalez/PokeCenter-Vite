import styled, { css } from "styled-components";
import { TooltipCSS } from "../../styles/GlobalStyles";

interface ContainerProps {
  selected: boolean;
  isEmpty: boolean;
}

export const Container = styled.li<ContainerProps>`
  ${TooltipCSS}

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);

  -webkit-box-shadow: 5px 5px 7px 3px rgba(0, 0, 0, 0.33);
  box-shadow: 5px 5px 7px 3px rgba(0, 0, 0, 0.33);
  transition: all 100ms ease-in;

  ${({ selected }) =>
    selected &&
    css`
      background: rgba(0, 200, 83, 0.3);
      border: 1px solid #00c853;
      transform: scale(1.1);
    `}

  ${({ isEmpty, selected }) =>
    isEmpty &&
    selected &&
    css`
      background: rgba(235, 64, 52, 0.3);
      border: 1px solid #ff0000;
    `}
`;

export const PokeImg = styled.img``;
