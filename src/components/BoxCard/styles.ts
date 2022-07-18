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
  background: ${(props) => props.theme.colors.backgrounds.opacityBg};

  -webkit-box-shadow: 5px 5px 7px 3px
    ${(props) => props.theme.colors.backgrounds.shadowBg};
  box-shadow: 5px 5px 7px 3px
    ${(props) => props.theme.colors.backgrounds.shadowBg};
  transition: all 100ms ease-in;

  ${({ selected }) =>
    selected &&
    css`
      background: ${(props) => props.theme.colors.backgrounds.selectedBg};
      border: 1px solid ${(props) => props.theme.colors.green};
      transform: scale(1.1);
    `}

  ${({ isEmpty, selected }) =>
    isEmpty &&
    selected &&
    css`
      background: ${(props) => props.theme.colors.backgrounds.emptyBg};
      border: 1px solid ${(props) => props.theme.colors.red};
    `}
`;

export const PokeImg = styled.img``;
