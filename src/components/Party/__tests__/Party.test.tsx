import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Party } from "..";

import { PokeContextMock } from "../../../mocks/ContextMock";
import { PokeStateType } from "context/models";

const stateMock: PokeStateType = {
  list: [
    {
      name: "Test list",
      pokeId: "7",
      pokeImg: "",
      pokeLvl: 10,
    },
  ],
  party: [
    {
      name: "Test 1",
      pokeId: "1",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test 2",
      pokeId: "2",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test 3",
      pokeId: "3",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test 4",
      pokeId: "4",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test 5",
      pokeId: "5",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test 6",
      pokeId: "6",
      pokeImg: "",
      pokeLvl: 10,
    },
  ],
};

describe("Party Component Tests", () => {
  test("Render Party Container Component Properly", () => {
    render(
      <PokeContextMock>
        <Party />
      </PokeContextMock>
    );
    const partyContainer = screen.getByTestId("partyContainer");
    expect(partyContainer).toBeInTheDocument();
  });
  test("Render Party Component with 6 Pokémons", () => {
    render(
      <PokeContextMock mockState={stateMock}>
        <Party />
      </PokeContextMock>
    );
    const partyBox = screen.getAllByTestId("partyBox");
    expect(partyBox).toHaveLength(6);
  });
});
