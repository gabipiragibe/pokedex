import { screen, waitFor } from "@testing-library/react";
import CategoriesFilter from "./index";
import { renderWithProviders } from "../../../utils/helpers";
import * as CategoryService from "../../../service/getPokemonType";

describe("<CategoriesFilter />", () => {
  const setFilteredPokemonMock = jest.fn();

  it("fetches and displays category options", async () => {
    jest
      .spyOn(CategoryService, "getOptions")
      .mockResolvedValue([{ name: "fire" }, { name: "water" }]);

    renderWithProviders(
      <CategoriesFilter setFilteredPokemon={setFilteredPokemonMock} />
    );

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Fire" })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: "Water" })).toBeInTheDocument();
    });
  });
});
