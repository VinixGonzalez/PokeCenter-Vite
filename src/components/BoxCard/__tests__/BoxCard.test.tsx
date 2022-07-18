import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BoxCard } from "..";
import { Pokemon } from "../../../api";
import { PokeContextMock } from "../../../mocks/PokeContextMock";

const pokeMock: Pokemon = {
  name: "test",
  pokeId: "1234",
  pokeImg: "empty",
  pokeLvl: 100,
};

describe("BoxCard Component Tests", () => {
  test("Render BoxCard Component Properly", () => {
    render(
      <PokeContextMock>
        <BoxCard active={false} empty={false} poke={pokeMock} />
      </PokeContextMock>
    );
    const boxCardContainer = screen.getByTestId("boxCardContainer");
    expect(boxCardContainer).toBeInTheDocument();
  });
});
