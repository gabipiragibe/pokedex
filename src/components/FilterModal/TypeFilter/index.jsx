import { useState } from "react";
import Select from "../Select";
import { getPokemonDetails } from "../../../service/getPokemonDetails";
import { getPokemonType } from "../../../service/getPokemonType";

const TypeArray = [
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
];

const TypeFilter = ({ updateFilteredPokemon }) => {
  const [selectedType, setSelectedType] = useState("");

  const onTypeChange = async (event) => {
    const type = event.target.value;
    setSelectedType(type);

    if (!type) return updateFilteredPokemon([]);

    try {
      const data = await getPokemonType(type);
      const filteredPokemons = await Promise.all(
        data?.pokemon.map((p) => getPokemonDetails(p.pokemon.name)) || []
      );
      updateFilteredPokemon(filteredPokemons);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
      updateFilteredPokemon([]);
    }
  };

  const options = TypeArray.map((type) => ({
    value: type,
    label: type.charAt(0).toUpperCase() + type.slice(1),
  }));

  return (
    <Select
      name="type"
      value={selectedType}
      onChange={onTypeChange}
      options={options}
    />
  );
};

export default TypeFilter;
