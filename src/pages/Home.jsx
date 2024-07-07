import * as S from "./styles";

import { Card, Header, SearchInput } from "../components";
import React, { useEffect, useState } from "react";

import { getPokemonDetails } from "../service/getPokemonDetails";

export const Home = () => {
  const [searchedPokemon, setSearchedPokemon] = useState();
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
      <Header />
      <S.Container>
        <SearchInput setSearchedPokemon={setSearchedPokemon} />
      </S.Container>
      <S.CardsContainer>
        <S.List>
          {searchedPokemon && (
            <li onClick={() => handleClick(searchedPokemon.id)}>
              <Card details={searchedPokemon} />
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

export default Home;
