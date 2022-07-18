import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { PokeImg } from "..";
import { PokeContextMock } from "../../../mocks/PokeContextMock";

describe("PokeImg Tests", () => {
  test("Render PokeImg Component Properly", () => {
    render(
      <PokeContextMock>
        <PokeImg />
      </PokeContextMock>
    );
    const pokeImg = screen.getByTestId("pokeImg");
    expect(pokeImg).toBeInTheDocument();
  });
});
