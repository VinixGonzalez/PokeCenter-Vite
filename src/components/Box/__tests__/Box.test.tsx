import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Box } from "..";

import { PokeContextMock } from "../../../mocks/contextMock";

test("Render Box Component Properly", () => {
  render(
    <PokeContextMock>
      <Box />
    </PokeContextMock>
  );
  const mainContainer = screen.getByTestId("mainContainer");
  expect(mainContainer).toBeInTheDocument();
});
