import React, { useState } from "react";
import * as S from "./styles";
import {
  getPokemon,
  getPokemonDetails,
} from "../../../service/getPokemonDetails";
import { useTranslation } from "react-i18next";

export const Filters = ({ updateFilteredPokemon }) => {
  const { t } = useTranslation();
  const [type, setType] = useState("");
  const [habitat, setHabitat] = useState("");
  const fetchPokemonsByTypeAndHabitat = async (type, habitat) => {
    if (type || habitat) {
      try {
        const response = await getPokemon(type, habitat);
        if (response) {
          const pokemons = response.typeData?.pokemon || [];
          const habitats = response.habitatData?.pokemon_species || [];
          // Encontrar a interseção dos Pokémons que atendem a ambos os critérios
          const combinedPokemons = pokemons.filter((pokemon) =>
            habitats.some(
              (habitatPokemon) =>
                (pokemon.pokemon ? pokemon.pokemon.name : pokemon.name) ===
                habitatPokemon.name
            )
          );
          const detailedPokemonsPromises = combinedPokemons.map((pokemon) =>
            getPokemonDetails(
              pokemon.pokemon ? pokemon.pokemon.name : pokemon.name
            )
          );
          const detailedPokemonsData = await Promise.all(
            detailedPokemonsPromises
          );
          updateFilteredPokemon(detailedPokemonsData); // Atualiza a lista filtrada no Home
        } else {
          updateFilteredPokemon([]); // Limpa a lista filtrada se não houver resposta
        }
      } catch (error) {
        updateFilteredPokemon([]); // Limpa a lista filtrada em caso de erro
        console.error(error);
      }
    }
  };
  const onTypeChange = (event) => {
    setType(event.target.value);
  };
  const onHabitatChange = (event) => {
    setHabitat(event.target.value);
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label style={{ padding: "10px" }}>
          Tipo:
          <select name="type" value={type} onChange={onTypeChange}>
            <option value="">Selecione um tipo</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
          </select>
        </label>
        <label style={{ padding: "10px" }}>
          Habitat:
          <select name="habitat" value={habitat} onChange={onHabitatChange}>
            <option value="">Selecione um habitat</option>
            <option value="cave">Cave</option>
            <option value="forest">Forest</option>
            <option value="grassland">Grassland</option>
            <option value="mountain">Mountain</option>
            <option value="rare">Rare</option>
            <option value="rough-terrain">Rough-terrain</option>
            <option value="sea">Sea</option>
            <option value="urban">Urban</option>
            <option value="waters-edge">Waters-edge</option>
          </select>
        </label>
        <S.FilterButton
          type="button"
          onClick={() => fetchPokemonsByTypeAndHabitat(type, habitat)}
        >
          {t("modal.filter_button")}
        </S.FilterButton>
      </form>
    </div>
  );
};
export default Filters;
