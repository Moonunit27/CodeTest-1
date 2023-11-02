import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";

test("displays the App component", async () => {
  await act(async () => {
    render(<App />);
  });

  const appElement = screen.getByTestId("app-component");
  expect(appElement).toBeInTheDocument();
});

test("displays the header", async () => {
  await act(async () => {
    render(<App />);
  });
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});
