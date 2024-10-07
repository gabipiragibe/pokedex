import { useState, useEffect } from "react";
import Select from "../Select";
import { getPokemonDetails } from "../../../service/getPokemonDetails";
import * as CategoryService from "../../../service/getPokemonType";

const CategoriesFilter = ({ setFilteredPokemon }) => {
  const [selectedType, setSelectedType] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const options = await CategoryService.getOptions();
      setCategoryOptions(options);
    };

    fetchCategories();
  }, []);

  const handleType = async (event) => {
    const value = event.target.value;
    setSelectedType(value);
    //função chamada quando o tipo do pokemon muda
    //primeiro pega o valor do type e atualiza o estado

    if (!value) {
      throw new Error("Parameter is not a valid habitat!");
    }
    //se o type for vazio, retorna um array vazio

    try {
      const data = await CategoryService.getPokemonType(value);
      //Se um tipo for selecionado, a função getPokemonType (API) tenta buscar os Pokémon desse tipo
      const filteredPokemons = await Promise.all(
        //usa Promise.all para buscar os detalhes de cada Pokémon retornado pela primeira chamada de API.
        data?.pokemon.map((item) => getPokemonDetails(item.pokemon.name)) || []
        //se tiver retorno, mapeia os pokemons e busca os detalhes de cada um (para exibir as infos certas, pois tava vindo sem ID, etc.)
        //item representa cada elemento do array data.pokemon durante a iteração do map
        //se data ou data.pokemon forem null ou undefined, então a expressão inteira retornará um array vazio []
      );
      setFilteredPokemon(filteredPokemons);
    } catch (error) {
      setFilteredPokemon([]);
    }
    //Se tiver sucesso, ela chama setFilteredPokemon com os Pokémon filtrados para poder exibir no componente que a props for passada.
    //Se ocorrer um erro, ela o registra no console e chama setFilteredPokemon com um array vazio.
  };

  const options = categoryOptions.map((type) => ({
    value: type.name,
    label: type.name.charAt(0).toUpperCase() + type.name.slice(1),
  }));
  //map para criar um array de objetos com value e label para cada tipo de Pokémon.
  //type é o tipo de Pokémon que foi selecionado

  return (
    <Select
      name="type"
      value={selectedType}
      onChange={handleType}
      options={options}
    />
  );
  //value é o tipo selecionado
  //onChange é a função que é chamada quando o tipo muda para atualizar o estado
  //options é o array de objetos com os tipos de Pokémon
};

export default CategoriesFilter;

//criar testes
