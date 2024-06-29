import * as S from "./styles";

import React, { useEffect, useState } from "react";

import { Card } from "../Cards/Card";
import { getPokemonDetails } from "../../service/getPokemonDetails";

export const Pokemons = () => {
  const [searchPokemon, setSearchPokemon] = useState(); //Armazena os detalhes do Pokémon buscado
  const [filteredPokemon, setFilteredPokemon] = useState(""); //Armazena o valor atual do input
  const [randomPokemon, setRandomPokemon] = useState([]); //Armazena lista de Pokémons aleatórios.
  const [pokemonInfo, setPokemonInfo] = useState(null); //armazenar id do pokemon, que as infos vao ser exibidas no click

  const handleChange = async (event) => {
    const { value } = event.target;
    setFilteredPokemon(value);
    if (value) {
      const response = await getPokemonDetails(parseInt(value));
      setSearchPokemon(response);
    } else {
      setSearchPokemon();
    }
  };

  const handleClick = (pokemonId) => {
    console.log("clicccck", pokemonId);
    setPokemonInfo(pokemonId === pokemonInfo ? null : pokemonId);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newPokemonsInfo = [];
      for (let i = 0; i < 5; i++) {
        const randomId = (min, max) =>
          Math.floor(Math.random() * (max - min + 1)) + min;
        const response = await getPokemonDetails(randomId(1, 100));
        newPokemonsInfo.push(response);
      }
      setRandomPokemon(newPokemonsInfo);
    };
    fetchData();
  }, []);

  return (
    <>
      <S.Container>
        <label>Buscar Pokemon:</label>
        <input type="number" value={filteredPokemon} onChange={handleChange} />
      </S.Container>
      <S.CardsContainer>
        <S.List>
          {searchPokemon && (
            <li onClick={() => handleClick(searchPokemon.id)}>
              <Card details={searchPokemon} />
            </li>
          )}
          {randomPokemon.map((pokemon, index) => (
            <li key={index} onClick={() => handleClick(pokemon.id)}>
              <Card details={pokemon} />
            </li>
          ))}
        </S.List>
      </S.CardsContainer>
    </>
  );
};
