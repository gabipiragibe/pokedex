import { useState } from "react";
import Select from "../Select";
import { getPokemonDetails } from "../../../service/getPokemonDetails";
import { getPokemonHabitat } from "../../../service/getPokemonHabitat";

const HabitatArray = [
  "cave",
  "forest",
  "grassland",
  "mountain",
  "rough-terrain",
  "sea",
  "urban",
  "waters-edge",
];

const HabitatFilter = ({ updateFilteredPokemon }) => {
  const [selectedHabitat, setSelectedHabitat] = useState("");

  const onHabitatChange = async (event) => {
    const habitat = event.target.value;
    setSelectedHabitat(habitat);

    if (!habitat) return updateFilteredPokemon([]);

    try {
      const { pokemon_species } = await getPokemonHabitat(habitat);
      const filteredPokemons = await Promise.all(
        pokemon_species.map((p) => getPokemonDetails(p.name))
      );
      updateFilteredPokemon(filteredPokemons);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
      updateFilteredPokemon([]);
    }
  };

  const options = HabitatArray.map((habitat) => ({
    value: habitat,
    label: habitat.charAt(0).toUpperCase() + habitat.slice(1),
  }));

  return (
    <Select
      name="habitat"
      value={selectedHabitat}
      onChange={onHabitatChange}
      options={options}
    />
  );
};

export default HabitatFilter;
