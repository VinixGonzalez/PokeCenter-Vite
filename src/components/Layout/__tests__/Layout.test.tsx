import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Layout } from "..";

describe("Layout Component Tests", () => {
  test("Render Layout Component Properly", () => {
    render(<Layout children={<div />} />);
    const layoutContainer = screen.getByTestId("layoutContainer");
    expect(layoutContainer).toBeInTheDocument();
  });
});
