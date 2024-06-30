import * as S from "./styles";

import React, { useEffect, useState } from "react";

import { Card } from "../Cards/Card";
import { PokemonSearchInput } from "../PokemonSearchInput/PokemonSearchInput";
import { getPokemonDetails } from "../../service/getPokemonDetails";

export const Pokemons = () => {
  const [searchPokemon, setSearchPokemon] = useState();
  const [listPokemon, setListPokemon] = useState([]); //Armazena lista de Pokémons aleatórios.
  const [pokemonData, setPokemonData] = useState(null); //armazenar id do pokemon, que as infos vao ser exibidas no click

  const handleClick = (pokemonId) => {
    setPokemonData(pokemonId === pokemonData ? null : pokemonId);
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
      setListPokemon(newPokemonsInfo);
    };
    fetchData();
  }, []);

  return (
    <>
      <S.Container>
        <PokemonSearchInput setSearchPokemon={setSearchPokemon} />
      </S.Container>
      <S.CardsContainer>
        <S.List>
          {searchPokemon && (
            <li onClick={() => handleClick(searchPokemon.id)}>
              <Card details={searchPokemon} />
            </li>
          )}
          {listPokemon.map((pokemon, index) => (
            <li key={index} onClick={() => handleClick(pokemon.id)}>
              <Card details={pokemon} />
            </li>
          ))}
        </S.List>
      </S.CardsContainer>
    </>
  );
};
