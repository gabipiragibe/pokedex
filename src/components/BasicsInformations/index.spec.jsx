import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BasicInformations } from "./index";

it("should display the correct values", () => {
  const sampleInformations = {
    abilities: [
      { ability: { name: "effect-spore" } },
      { ability: { name: "damp" } },
    ],
    types: [{ type: { name: "bug" } }, { type: { name: "grass" } }],
    stats: [
      { stat: { name: "hp" }, base_stat: 60 },
      { stat: { name: "attack" }, base_stat: 95 },
      { stat: { name: "defense" }, base_stat: 80 },
      { stat: { name: "special-attack" }, base_stat: 60 },
      { stat: { name: "special-defense" }, base_stat: 70 },
      { stat: { name: "speed" }, base_stat: 40 },
    ],
    height: 10,
    weight: 295,
    base_experience: 142,
    order: 81,
  };

  render(<BasicInformations informations={sampleInformations} />);

  expect(screen.getByText("Habilidades:")).toBeInTheDocument();
  expect(screen.getByText("effect-spore,")).toBeInTheDocument();
  expect(screen.getByText("damp,")).toBeInTheDocument();

  expect(screen.getByText("Tipo:")).toBeInTheDocument();
  expect(screen.getByText("bug")).toBeInTheDocument();
  expect(screen.getByText("grass")).toBeInTheDocument();

  expect(screen.getByText("Stats:")).toBeInTheDocument();
  expect(screen.getByText("hp: 60,")).toBeInTheDocument();
  expect(screen.getByText("attack: 95,")).toBeInTheDocument();
  expect(screen.getByText("defense: 80,")).toBeInTheDocument();
  expect(screen.getByText("special-attack: 60,")).toBeInTheDocument();
  expect(screen.getByText("special-defense: 70,")).toBeInTheDocument();
  expect(screen.getByText("speed: 40,")).toBeInTheDocument();
});

it("should not render without information", () => {
  const { container } = render(<BasicInformations informations={null} />);
  expect(container).toBeEmptyDOMElement();
});
