import * as Styled from "./styles";

import { useEffect, useState } from "react";

import React from "react";
import axios from "axios";

export const Pokemons = () => {
  const [retornoDaRequest, setModificadorDoRetornoRequest] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1")
      .then(function (response) {
        setModificadorDoRetornoRequest(response.data);
        console.log("response", response);
      });
  }, []);

  return (
    <Styled.CardsContainer> 
    <Styled.Card>  
      {retornoDaRequest && (
        <>
          <h1>{retornoDaRequest.name}</h1>
          <Styled.PerfilImage alt="imagem do pokemon" src={retornoDaRequest?.sprites?.front_default} />
          <p><strong>#</strong> {retornoDaRequest.id}</p>
          <p><strong>Peso:</strong>{retornoDaRequest.weight} | <strong>Altura:</strong> {retornoDaRequest.height}</p>
        </>
      )}
    </Styled.Card>
    </Styled.CardsContainer>
  );
};