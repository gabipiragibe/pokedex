import { useEffect, useState } from "react";
import Select from "../Select";
import { getPokemonDetails } from "../../../service/getPokemonDetails";
import * as HabitatService from "../../../service/getPokemonHabitat";

const HabitatFilter = ({ setFilteredPokemon }) => {
  const [selectedHabitat, setSelectedHabitat] = useState("");
  const [habitatOptions, setHabitatOptions] = useState([]);

  useEffect(() => {
    const fetchHabitats = async () => {
      const options = await HabitatService.getOptions();
      setHabitatOptions(options);
    };

    fetchHabitats();
  }, []);

  const onHabitatChange = async (event) => {
    const habitat = event.target.value;
    setSelectedHabitat(habitat);

    if (!habitat) {
      throw new Error("Parameter is not a valid habitat!");
    }

    try {
      const { pokemon_species } = await HabitatService.getPokemonHabitat(
        habitat
      );
      const filteredPokemons = await Promise.all(
        pokemon_species.map((item) => getPokemonDetails(item.name))
      );
      setFilteredPokemon(filteredPokemons);
    } catch (error) {
      setFilteredPokemon([]);
    }
  };

  const options = habitatOptions.map((habitat) => ({
    value: habitat.name, // habitat.name pra corresponder à estrutura de dados
    label: habitat.name.charAt(0).toUpperCase() + habitat.name.slice(1),
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
