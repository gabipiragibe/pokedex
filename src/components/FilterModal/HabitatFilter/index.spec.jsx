import { screen, waitFor } from "@testing-library/react";
import HabitatFilter from "./index";
import { renderWithProviders } from "../../../utils/helpers";
import * as HabitatService from "../../../service/getPokemonHabitat";

describe("<HabitatFilter />", () => {
  const setFilteredPokemonMock = jest.fn();

  it("fetches and displays habitat options", async () => {
    jest
      .spyOn(HabitatService, "getOptions")
      .mockResolvedValue([{ name: "forest" }, { name: "cave" }]);

    renderWithProviders(
      <HabitatFilter setFilteredPokemon={setFilteredPokemonMock} />
    );

    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "Forest" })
      ).toBeInTheDocument();
      expect(screen.getByRole("option", { name: "Cave" })).toBeInTheDocument();
    });
  });
});
