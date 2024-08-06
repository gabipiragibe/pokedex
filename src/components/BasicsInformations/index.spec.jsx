import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BasicInformations } from "./index";

it("should display correct texts", () => {
  const sampleInformations = {
    abilities: [],
    types: [],
    stats: [],
    height: 0,
    weight: 0,
    base_experience: 0,
    order: 0,
  };

  render(<BasicInformations informations={sampleInformations} />);
  expect(screen.getByText("Habilidades:")).toBeInTheDocument();
  expect(screen.getByText("Tipo:")).toBeInTheDocument();
  expect(screen.getByText("Stats:")).toBeInTheDocument();
  expect(screen.getByText("Altura:")).toBeInTheDocument();
  expect(screen.getByText("Peso:")).toBeInTheDocument();
  expect(screen.getByText("Experiência base:")).toBeInTheDocument();
  expect(screen.getByText("Ordem:")).toBeInTheDocument();
});

it("should not render without information", () => {
  const { container } = render(<BasicInformations informations={null} />);
  expect(container).toBeEmptyDOMElement();
});
