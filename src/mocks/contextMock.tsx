import { PokeStateType } from "context/models";
import React from "react";
import { ReactNode } from "react";
import { INITIAL_STATE, PokeContext } from "../context/pokeContext";

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
      {children}
    </PokeContext.Provider>
  );
};

export { PokeContextMock };
