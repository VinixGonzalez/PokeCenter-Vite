import React from "react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { INITIAL_STATE, PokeContext, PokeStateType } from "../context";

interface PokeContextMockProps {
  children: ReactNode;
  mockState?: PokeStateType;
}
const dispatch = jest.fn();

const PokeContextMock = ({ children, mockState }: PokeContextMockProps) => {
  return (
    <PokeContext.Provider
      value={{ pokeState: mockState || INITIAL_STATE, dispatch }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PokeContext.Provider>
  );
};

export { PokeContextMock };
