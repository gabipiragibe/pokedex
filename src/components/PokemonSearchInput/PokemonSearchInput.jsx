import React, { useState } from "react";

import { getPokemonDetails } from "../../service/getPokemonDetails";

export const PokemonSearchInput = ({ setSearchPokemon }) => {
  const [filteredPokemon, setFilteredPokemon] = useState("");

  const onPokemonInput = async (event) => {
    const { value } = event.target;
    setFilteredPokemon(value);
    if (value) {
      const response = await getPokemonDetails(parseInt(value));
      setSearchPokemon(response);
    } else {
      setSearchPokemon();
    }
  };
  return (
    <div>
      <label>Buscar Pokemon:</label>
      <input type="number" value={filteredPokemon} onChange={onPokemonInput} />
    </div>
  );
};
