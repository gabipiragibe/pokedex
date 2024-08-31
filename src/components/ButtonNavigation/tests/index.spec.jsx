import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { BrowserRouter as Router } from "react-router-dom";
import ButtonNavigation from "../index";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

i18n.init({
  lng: "pt",
  resources: {
    pt: {
      translation: {
        buttons: {
          previous_id: "Anterior ID",
          next_id: "Próximo ID",
        },
      },
    },
  },
});

it("<ButtonNavigation />", () => {
  const renderWithProviders = (component) =>
    render(
      <I18nextProvider i18n={i18n}>
        <Router>{component}</Router>
      </I18nextProvider>
    );

  renderWithProviders(<ButtonNavigation />);

  const buttonNext = screen.getByRole("button", { name: "Próximo ID" });
  const buttonPrevious = screen.getByRole("button", { name: "Anterior ID" });

  userEvent.click(buttonNext);
  userEvent.click(buttonPrevious);

  expect(screen.getByText("Anterior ID")).toBeInTheDocument();
  expect(screen.getByText("Próximo ID")).toBeInTheDocument();
});
