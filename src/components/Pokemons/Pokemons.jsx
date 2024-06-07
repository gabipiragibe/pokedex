import * as S from "./styles";

import React, { useEffect, useState } from "react";

import { getPokemonDetails } from "../../service/getPokemonDetails";

export const Pokemons = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState(1);

  const handleChange = (event) => {
    setSearchPokemon(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemonDetails(searchPokemon);
      setPokemonInfo(response);
      console.log(response);
    };
    fetchData();
  }, [searchPokemon]);

  return (
    <>
      <S.Container>
        <input
          type="number"
          placeholder="Digite um ID"
          value={searchPokemon}
          onChange={handleChange}
        />
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
                <strong>#ID</strong> {pokemonInfo.id}
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
