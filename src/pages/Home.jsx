import { useEffect, useState } from "react";

import React from "react";
import axios from "axios";

export const Home = () => {
  const valorInicialDoRetornoDaRequest = [];
  const [retornoDaRequest, setModificadorDoRetornoRequest] = useState(
    valorInicialDoRetornoDaRequest
  );

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/10")
      .then(function (response) {
        setModificadorDoRetornoRequest(response.data);
        console.log("response", response);
      });
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      {retornoDaRequest && (
        <>
          <p>Nome: {retornoDaRequest.name}</p>
          <p>Id: {retornoDaRequest.id}</p>
          <p>Peso: {retornoDaRequest.weight}</p>
          <p>Altura: {retornoDaRequest.height}</p>
          <p>Foto:</p>
          <img src={retornoDaRequest.sprites.front_default} />
        </>
      )}
    </div>
  );
};

// criar um input que faça a busca   
// axios.get(`pokemon.com/${valordoinput}`)