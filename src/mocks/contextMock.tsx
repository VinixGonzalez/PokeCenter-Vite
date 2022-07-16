import React from "react";
import { ReactNode } from "react";
import { INITIAL_STATE, PokeContext } from "../context/pokeContext";

interface PokeContextMockProps {
  children: ReactNode;
}
const PokeContextMock = ({ children }: PokeContextMockProps) => {
  const dispatch = jest.fn();

  return (
    <PokeContext.Provider value={{ pokeState: INITIAL_STATE, dispatch }}>
      {children}
    </PokeContext.Provider>
  );
};

export { PokeContextMock };
