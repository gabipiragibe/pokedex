import axios from "axios";

export const getPokemonHabitat = (habitat) => {
  const data = axios
    .get(`https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`)
    .then(function (response) {
      console.log("response", response);
      return response.data;
    })
    .catch(function (error) {
      return null;
    });
  return data;
};

export const getOptions = () => {
  const data = axios
    .get(`https://pokeapi.co/api/v2/pokemon-habitat/`)
    .then(function (response) {
      console.log("response", response);
      return response.data.results;
    })
    .catch(function (error) {
      return null;
    });
  return data;
};
