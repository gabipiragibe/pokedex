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

export const getPokemon = async (type, habitat) => {
  try {
    const typeResponse = await axios.get(
      `https://pokeapi.co/api/v2/type/${type}`
    );
    const habitatResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`
    );

    return {
      typeData: typeResponse.data,
      habitatData: habitatResponse.data,
    };
  } catch (error) {
    return null;
  }
};
