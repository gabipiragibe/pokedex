import { Card } from ".";
import { renderWithProviders } from "../../utils/helpers";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
const mockDetails = {
  name: "bulbasaur",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  id: 1,
  weight: 69,
  height: 7,
};

it("<Card/>", () => {
  renderWithProviders(<Card details={mockDetails} />);

  const name = screen.getByText("BULBASAUR");
  const imageElement = screen.getByAltText("Imagem do pokemon de frente");
  const idElement = screen.getByText(/1/i);
  const weightElement = screen.getByText(/69/i);
  const heightElement = screen.getByText(/7/i);

  expect(name).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute(
    "src",
    mockDetails.sprites.front_default
  );
  expect(idElement).toBeInTheDocument();
  expect(weightElement).toBeInTheDocument();
  expect(heightElement).toBeInTheDocument();
});
