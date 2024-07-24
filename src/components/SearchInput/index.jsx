import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { getPokemonDetails } from "../../service/getPokemonDetails";

export const SearchInput = ({ setSearchedPokemon, setSearchError }) => {
  const { t } = useTranslation();
  const [filteredPokemon, setFilteredPokemon] = useState("");

  const onPokemonInput = async (event) => {
    const { value } = event.target;
    setFilteredPokemon(value);
    if (value) {
      try {
        const response = await getPokemonDetails(parseInt(value));
        if (response) {
          setSearchedPokemon(response);
          setSearchError(null); // limpa qualquer erro anterior
        } else {
          throw new Error("Pokémon não encontrado, busque outro ID.");
        }
      } catch (error) {
        setSearchError(error.message);
        setSearchedPokemon(null);
      }
    } else {
      setSearchedPokemon(null);
      setSearchError(null); // limpa o erro quando não há entrada
    }
  };

  return (
    <div>
      <label>{t("search.label")}</label>
      <input type="number" value={filteredPokemon} onChange={onPokemonInput} />
    </div>
  );
};
