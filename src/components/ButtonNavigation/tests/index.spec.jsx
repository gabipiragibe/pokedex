import React from "react";
import { screen } from "@testing-library/react";
import ButtonNavigation from "../index";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../utils/helpers";

it("<ButtonNavigation />", () => {
  renderWithProviders(<ButtonNavigation />);

  const buttonNext = screen.getByRole("button", { name: /Próximo ID/ });
  const buttonPrevious = screen.getByRole("button", { name: /Anterior ID/ });

  userEvent.click(buttonNext);
  userEvent.click(buttonPrevious);

  expect(
    screen.getByRole("button", { name: /Anterior ID/ })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Próximo ID/ })
  ).toBeInTheDocument();
});
