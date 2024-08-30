import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { BrowserRouter as Router } from "react-router-dom";
import ButtonNavigation from "../index";
import "@testing-library/jest-dom/extend-expect";

it("should render ButtonNavigation", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Router>
        <ButtonNavigation />
      </Router>
    </I18nextProvider>
  );

  expect(screen.getByText("Anterior ID:")).toBeInTheDocument();
  expect(screen.getByText("Próximo ID:")).toBeInTheDocument();
});
