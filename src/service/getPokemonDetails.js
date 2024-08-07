import axios from "axios";

export const getPokemonDetails = (uuid) => {
  const data = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${uuid}`)
    .then(function (response) {
      console.log("response", response);
      return response.data;
    })
    .catch(function (error) {
      return null;
    });
  return data;
};
