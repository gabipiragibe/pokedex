import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { getPokemon } from "../../service/getPokemonDetails";

export const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [type, setType] = useState(""); //Armazena o tipo de Pokémon.
  const [habitat, setHabitat] = useState("");
  const [pokemonsData, setPokemonsData] = useState([]); //Armazena lista de Pokémons por tipo.
  const [habitatData, setHabitatData] = useState([]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const fetchPokemonsByType = async (type, habitat) => {
    if (type || habitat) {
      try {
        const response = await getPokemon(
          type.toLowerCase(),
          habitat.toLowerCase()
        );
        if (response) {
          setPokemonsData(response.typeData.pokemon || []);
          setHabitatData(response.habitatData.pokemon_species || []);
        } else {
          setPokemonsData([]);
          setHabitatData([]);
        }
      } catch (error) {
        setPokemonsData([]);
        setHabitatData([]);
        console.error(error);
      }
    } else {
      setPokemonsData([]);
      setHabitatData([]);
    }
  };

  useEffect(() => {
    fetchPokemonsByType(type, habitat);
  }, [type, habitat]);

  const onTypeChange = (event) => setType(event.target.value);
  const onHabitatChange = (event) => setHabitat(event.target.value);

  const filterFieldsInput = [
    {
      label: "Tipo",
      name: "type",
      value: type,
      onChange: onTypeChange,
    },
    {
      label: "Habitat",
      name: "habitat",
      value: habitat,
      onChange: onHabitatChange,
    },
  ];

  const filteredFieldsInput = filterFieldsInput.map(
    ({ label, name, value, onChange }) => (
      <label key={name}>
        <br />
        {label}:
        <input type="text" name={name} value={value} onChange={onChange} />
      </label>
    )
  );

  const limitedPokemonsData = pokemonsData.slice(0, 5);
  const limitedHabitatData = habitatData.slice(0, 5);

  return (
    <S.Container>
      <S.openModalButton onClick={openModal}>Abrir Modal</S.openModalButton>
      <S.modalContainer isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Filtrar Pokémons</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {filteredFieldsInput}
          <button
            type="button"
            onClick={() => fetchPokemonsByType(type, habitat)}
          >
            Filtrar
          </button>
        </form>
        <div>
          <ul>
            {limitedPokemonsData.map((pokemon, index) => (
              <li key={index}>{pokemon.pokemon.name}</li>
            ))}
          </ul>
          <ul>
            {limitedHabitatData.map((species, index) => (
              <li key={index}>{species.name}</li>
            ))}
          </ul>
        </div>
      </S.modalContainer>
    </S.Container>
  );
};

export default Modal;
