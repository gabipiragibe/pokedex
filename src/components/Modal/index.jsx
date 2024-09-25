import React, { useState } from "react";
import * as S from "./styles";
import { getPokemon, getPokemonDetails } from "../../service/getPokemonDetails";
import { Card } from "../Card";
import { useTranslation } from "react-i18next";

export const Modal = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [habitat, setHabitat] = useState("");
  const [detailedPokemons, setDetailedPokemons] = useState([]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const fetchPokemonsByTypeAndHabitat = async (type, habitat) => {
    if (type || habitat) {
      try {
        const response = await getPokemon(
          type.toLowerCase(),
          habitat.toLowerCase()
        );
        if (response) {
          const pokemons = response.typeData.pokemon || [];
          const habitats = response.habitatData.pokemon_species || [];
          const combinedPokemons = [...pokemons, ...habitats];

          const detailedPokemonsPromises = combinedPokemons.map((pokemon) =>
            getPokemonDetails(
              pokemon.pokemon ? pokemon.pokemon.name : pokemon.name
            )
          );
          const detailedPokemonsData = await Promise.all(
            detailedPokemonsPromises
          );
          setDetailedPokemons(detailedPokemonsData);
        } else {
          setDetailedPokemons([]);
        }
      } catch (error) {
        setDetailedPokemons([]);
        console.error(error);
      }
    }
  };

  const onTypeChange = (event) => {
    const value = event.target.value;
    setType(value);
    if (!value && !habitat) {
      setDetailedPokemons([]);
    }
  };

  const onHabitatChange = (event) => {
    const value = event.target.value;
    setHabitat(value);
    if (!value && !type) {
      setDetailedPokemons([]);
    }
  };

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
      <label key={name} style={{ padding: "10px" }}>
        {label}:
        <input type="text" name={name} value={value} onChange={onChange} />
      </label>
    )
  );

  const limitedDetailedPokemons = detailedPokemons.slice(0, 5);

  return (
    <S.Container>
      <S.openModalButton onClick={openModal}>
        {t("modal.filters")}
      </S.openModalButton>
      <S.modalContainer isOpen={modalIsOpen} onRequestClose={closeModal}>
        <form onSubmit={(e) => e.preventDefault()}>
          {filteredFieldsInput}
          <S.FilterButton
            type="button"
            onClick={() => fetchPokemonsByTypeAndHabitat(type, habitat)}
          >
            {t("modal.filter_button")}
          </S.FilterButton>
        </form>
      </S.modalContainer>
      <S.List>
        {limitedDetailedPokemons.map((pokemon, index) => (
          <li key={index}>
            <Card details={pokemon} />
          </li>
        ))}
      </S.List>
    </S.Container>
  );
};

export default Modal;
