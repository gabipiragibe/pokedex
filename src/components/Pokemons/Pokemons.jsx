import * as S from "./styles";

import React, { useEffect, useState } from "react";

import { getPokemonDetails } from "../../service/getPokemonDetails";

export const Pokemons = () => {
  const [pokemonsInfo, setPokemonsInfo] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState(1);
  // const [handlePokemon, setHandlePokemon] = useState([]);

  const handleChange = (event) => {
    setSearchPokemon(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newPokemonsInfo = [];
      for (let i = 0; i < 5; i++) {
        const randomId = (min, max) =>
          Math.floor(Math.random() * (max - min + 1)) + min;
        const response = await getPokemonDetails(i + randomId(1, 100));
        newPokemonsInfo.push(response);
      }
      setPokemonsInfo(newPokemonsInfo);
    };
    fetchData();
  }, [searchPokemon]);

  return (
    <>
      <S.Container>
        <label>Buscar Pokemon:</label>
        <input type="number" value={searchPokemon} onChange={handleChange} />
      </S.Container>
      <S.CardsContainer>
        <S.List>
          {pokemonsInfo.map((pokemon, index) => (
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
