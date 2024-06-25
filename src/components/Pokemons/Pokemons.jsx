import * as S from "./styles";

import React, { useEffect, useState } from "react";

import { getPokemonDetails } from "../../service/getPokemonDetails";

export const Pokemons = () => {
  const [searchPokemon, setSearchPokemon] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState("");
  const [randomPokemon, setRandomPokemon] = useState([]);

  const handleChange = async (event) => {
    setFilteredPokemon(event.target.value);
    if (event.target.value) {
      const response = await getPokemonDetails(parseInt(event.target.value));
      setSearchPokemon(response);
    } else {
      setSearchPokemon(null);
    }
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
            <li>
              <S.Card>
                <>
                  <h1>{searchPokemon.name}</h1>
                  <S.PerfilImage
                    alt="imagem do pokemon"
                    src={searchPokemon?.sprites?.front_default}
                  />
                  <p>
                    <strong>#ID</strong> {searchPokemon.id}
                  </p>
                  <p>
                    <strong>Peso:</strong>
                    {searchPokemon.weight} | <strong>Altura:</strong>{" "}
                    {searchPokemon.height}
                  </p>
                </>
              </S.Card>
            </li>
          )}
          {randomPokemon.map((pokemon, index) => (
            <li key={index}>
              <S.Card>
                <>
                  <h1>{pokemon.name}</h1>
                  <S.PerfilImage
                    alt="imagem do pokemon"
                    src={pokemon?.sprites?.front_default}
                  />
                  <p>
                    <strong>#ID</strong> {pokemon.id}
                  </p>
                  <p>
                    <strong>Peso:</strong>
                    {pokemon.weight} | <strong>Altura:</strong> {pokemon.height}
                  </p>
                </>
              </S.Card>
            </li>
          ))}
        </S.List>
      </S.CardsContainer>
    </>
  );
};
