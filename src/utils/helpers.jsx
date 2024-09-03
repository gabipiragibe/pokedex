import "@testing-library/jest-dom/extend-expect";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import translationPT from "../locales/ptbr.json";

i18n.init({
  lng: "pt",
  resources: {
    pt: {
      translation: translationPT,
    },
  },
});

export const renderWithProviders = (component) => {
  render(
    <I18nextProvider i18n={i18n}>
      <Router>{component}</Router>
    </I18nextProvider>
  );
};
