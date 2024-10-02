import * as S from "./styles";
import { Card, Header, SearchInput, Error } from "../../components";
import { Modal } from "../../components/FilterModal/Modal";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import ErrorAnimation from "../../components/Error/assets/error-animation.json";
import { useNavigate } from "react-router-dom";
import { getPokemonDetails } from "../../service/getPokemonDetails";

const Home = () => {
  const [listPokemon, setListPokemon] = useState([]); // Armazena lista de Pokémons aleatórios.
  const [pokemonData, setPokemonData] = useState(); // Armazena id do pokemon, que as infos vão ser exibidas no click
  const [error, setError] = useState();
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const navigate = useNavigate();

  const handleClick = (pokemonId) => {
    setPokemonData(pokemonId === pokemonData ? null : pokemonId);
    navigate(`/details/${pokemonId}`);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  const randomId = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newPokemonsInfo = [];
        for (let i = 0; i < 5; i++) {
          const response = await getPokemonDetails(randomId(1, 100));
          newPokemonsInfo.push(response);
        }
        setListPokemon(newPokemonsInfo);
      } catch (error) {
        setError("Não foi possível carregar os dados do Pokémon.");
      }
    };
    fetchData();
  }, []);

  const updateFilteredPokemon = (pokemonList) => {
    setFilteredPokemon(pokemonList);
  };

  return (
    <>
      <Header />
      <S.Container>
        <SearchInput setSearchError={handleError} />
        {error && (
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Lottie loop={true} animationData={ErrorAnimation} />
            <Error message={error} />
          </div>
        )}
      </S.Container>
      <Modal updateFilteredPokemon={updateFilteredPokemon} />
      <S.CardsContainer>
        <S.List>
          {(filteredPokemon.length > 0 ? filteredPokemon : listPokemon).map(
            (pokemon, index) => (
              <li key={index} onClick={() => handleClick(pokemon.id)}>
                <Card details={pokemon} />
              </li>
            )
          )}
        </S.List>
      </S.CardsContainer>
    </>
  );
};

export default Home;
