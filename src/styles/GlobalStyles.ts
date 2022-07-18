import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
    background: linear-gradient(90deg, rgba(175,255,178,1) 0%, rgba(190,197,255,1) 100%);
  }

  li {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }


`;

export const Content = styled.div`
  display: flex;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Header = styled.header`
  text-align: center;
`;

export const AppTitle = styled.h1``;

export const TooltipCSS = css`
  position: relative;

  &:hover::after {
    opacity: 1;
    pointer-events: all;
  }
  &::after {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    white-space: nowrap;
    pointer-events: none;
    transition: 0.5s;
    opacity: 0;
    content: attr(aria-label);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 5px;
    padding: 12px 16px;
    font-size: 14px;
    position: absolute;
  }
`;
