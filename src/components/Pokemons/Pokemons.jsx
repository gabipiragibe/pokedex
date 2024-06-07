import * as S from "./styles";

import React, { useEffect, useState } from "react";

import { getPokemonDetails } from "../../service/getPokemonDetails";

export const Pokemons = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState();

  const handleChange = (event) => {
    setSearchPokemon(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemonDetails(5);
      setPokemonInfo(response);
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <S.Container>
        <input
          type="number"
          placeholder="Digite um ID"
          value={searchPokemon}
          onChange={handleChange}
        />
        <p>{searchPokemon}</p>
      </S.Container>
      <S.CardsContainer>
        <S.Card>
          {pokemonInfo && (
            <>
              <h1>{pokemonInfo.name}</h1>
              <S.PerfilImage
                alt="imagem do pokemon"
                src={pokemonInfo?.sprites?.front_default}
              />
              <p>
                <strong>#</strong> {pokemonInfo.id}
              </p>
              <p>
                <strong>Peso:</strong>
                {pokemonInfo.weight} | <strong>Altura:</strong>{" "}
                {pokemonInfo.height}
              </p>
            </>
          )}
        </S.Card>
      </S.CardsContainer>
    </>
  );
};
