import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header";

test("renders the LanguageSwitchButton component", () => {
  render(<Header />);
  const languageSwitchButtonElement = screen.getByTestId(
    "language-switch-button",
  );
  expect(languageSwitchButtonElement).toBeInTheDocument();
});
