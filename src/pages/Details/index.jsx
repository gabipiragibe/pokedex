import { useEffect, useState } from "react";
import { Card, Header } from "../../components";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../../service/getPokemonDetails";

import * as S from "./styles";

export const Details = () => {
  const { pokemonId } = useParams();
  const [pokemonsDetails, setPokemonsDetails] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getPokemonDetails(pokemonId);
      setPokemonsDetails(response);
    };
    fetchDetails();
  }, [pokemonId]);

  return (
    <div>
      <Header />
      <S.Container>
        {pokemonsDetails ? (
          <Card details={pokemonsDetails} />
        ) : (
          <h1>Carregando...</h1>
        )}
      </S.Container>
    </div>
  );
};

export default Details;
