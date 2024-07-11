import { useEffect, useState } from "react";
import { Header } from "../../components";
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
  console.log("pokeDetails", pokemonsDetails);
  return (
    <div style={{ backgrounColor: "green" }}>
      <Header />
      {pokemonsDetails && (
        <S.Container>
          <S.Photo
            alt="imagem do pokemon"
            src={pokemonsDetails?.sprites?.front_default}
          />
          <S.Photo
            alt="imagem do pokemon"
            src={pokemonsDetails?.sprites?.back_default}
          />
          <S.PrincipalInfos>
            <p>Nome: {pokemonsDetails.name}</p>
            <p>ID: {pokemonsDetails.id}</p>{" "}
          </S.PrincipalInfos>
        </S.Container>
      )}
    </div>
  );
};

export default Details;
