import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Box } from "..";
import { PokeContextMock } from "../../../mocks/ContextMock";
import { PokeStateType } from "context/models";

const stateMock: PokeStateType = {
  list: [
    {
      name: "Test list 1",
      pokeId: "1",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 2",
      pokeId: "2",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 3",
      pokeId: "3",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 4",
      pokeId: "4",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 5",
      pokeId: "5",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 6",
      pokeId: "6",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 7",
      pokeId: "7",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 8",
      pokeId: "8",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 9",
      pokeId: "9",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 10",
      pokeId: "10",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 11",
      pokeId: "11",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 12",
      pokeId: "12",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 13",
      pokeId: "13",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 14",
      pokeId: "14",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 15",
      pokeId: "15",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 16",
      pokeId: "16",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 17",
      pokeId: "17",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 18",
      pokeId: "18",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 19",
      pokeId: "19",
      pokeImg: "",
      pokeLvl: 10,
    },
    {
      name: "Test list 20",
      pokeId: "20",
      pokeImg: "",
      pokeLvl: 10,
    },
  ],
  party: [
    {
      name: "Test Party 1",
      pokeId: "1",
      pokeImg: "",
      pokeLvl: 10,
    },
  ],
};

describe("Box Component Tests", () => {
  test("Render Box Component Properly", () => {
    render(
      <PokeContextMock>
        <Box />
      </PokeContextMock>
    );
    const mainContainer = screen.getByTestId("mainContainer");
    expect(mainContainer).toBeInTheDocument();
  });
  test("Render Box Component With 20 BoxCards", () => {
    render(
      <PokeContextMock mockState={stateMock}>
        <Box />
      </PokeContextMock>
    );
    const boxCards = screen.getAllByTestId("boxCardContainer");
    expect(boxCards).toHaveLength(20);
  });
  test("Render Box Component With 20 BoxCards", () => {
    render(
      <PokeContextMock mockState={stateMock}>
        <Box />
      </PokeContextMock>
    );
    const boxCards = screen.getAllByTestId("boxCardContainer");
    fireEvent.click(boxCards[1]);

    screen.debug();
  });
});
