import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";

const testColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  }
]

test("Fetches data and renders the bubbles", () => {
  // Finish this test

  // Seeing if page even loads
  render(<BubblePage />)

  // Loading page again with an array of colors
  const { rerender } = render(<ColorList colors={testColors} />)

  const screenTest = screen.getAllByTestId(/colors/i)

  // Checking to see that our sample arry has loaded the information
  expect(screenTest).toHaveLength(2)

});
