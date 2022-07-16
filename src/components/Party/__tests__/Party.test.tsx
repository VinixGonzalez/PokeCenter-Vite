import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Party } from "..";

import { PokeContextMock } from "../../../mocks/contextMock";
describe("Party Container Tests", () => {
  test("Render Party Container Component Properly", () => {
    render(
      <PokeContextMock>
        <Party />
      </PokeContextMock>
    );
    const partyContainer = screen.getByTestId("partyContainer");
    expect(partyContainer).toBeInTheDocument();
  });
});
