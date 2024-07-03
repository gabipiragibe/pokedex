import React, { useState } from "react";

import { getPokemonDetails } from "../../service/getPokemonDetails";

export const SearchInput = ({ setSearchedPokemon }) => {
  const [filteredPokemon, setFilteredPokemon] = useState("");

  const onPokemonInput = async (event) => {
    const { value } = event.target;
    setFilteredPokemon(value);
    if (value) {
      const response = await getPokemonDetails(parseInt(value));
      setSearchedPokemon(response);
    } else {
      setSearchedPokemon();
    }
  };
  return (
    <div>
      <label>Buscar Pokemon: </label>
      <input type="number" value={filteredPokemon} onChange={onPokemonInput} />
    </div>
  );
};
