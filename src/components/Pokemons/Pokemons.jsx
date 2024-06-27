import * as S from "./styles";

import React, { useEffect, useState } from "react";

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
            <li key={index} onClick={() => handleClick(pokemon.id)}>
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
