import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { getPokemonDetails } from "../../service/getPokemonDetails";

export const SearchInput = ({ setSearchError }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filteredPokemon, setFilteredPokemon] = useState("");
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchPokemon = await getPokemonDetails();
        setListPokemon(searchPokemon);
      } catch (error) {
        console.log("Não foi possível carregar os dados do Pokémon.", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    return filteredPokemon ? navigate(`/details/${filteredPokemon}`) : null;
  };

  const handleFilter = () => {
    const firePokemons = listPokemon.find((pokemon) =>
      pokemon.types.includes("fire")
    );
    if (firePokemons) {
      navigate(`/details/${firePokemons.id}`);
    } else {
      console.error("Nenhum pokemon do tipo fogo encontrado.");
    }
  };

  const onPokemonInput = async (event) => {
    const { value } = event.target;
    setFilteredPokemon(value);

    if (value) {
      try {
        const response = await getPokemonDetails(parseInt(value));
        if (response) {
          setSearchError(null); // limpa qualquer erro anterior
        } else {
          throw new Error("Pokémon não encontrado, busque outro ID.");
        }
      } catch (error) {
        setSearchError(error.message);
      }
    } else {
      setSearchError(null); // limpa o erro quando não há entrada
    }
  };

  return (
    <div>
      <input
        type="number"
        value={filteredPokemon}
        onChange={onPokemonInput}
        style={{ marginRight: "10px" }}
      />
      <button
        value={filteredPokemon}
        onClick={handleClick}
        disabled={filteredPokemon <= 0 || filteredPokemon > 200}
      >
        {t("search.label")}{" "}
      </button>
      <button onClick={handleFilter}>Pokemons do tipo fogo</button>
    </div>
  );
};
