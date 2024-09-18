import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { getPokemonType } from "../../service/getPokemonDetails";

export const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [pokemonsData, setPokemonsData] = useState([]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const fetchPokemonsByType = async (type) => {
    if (type) {
      try {
        const response = await getPokemonType(type.toLowerCase());
        if (response) {
          setPokemonsData(response.pokemon || []);
        } else {
          setPokemonsData([]);
          console.error("Tipo não encontrado, busque outro.");
        }
      } catch (error) {
        setPokemonsData([]);
        console.error(error);
      }
    } else {
      setPokemonsData([]);
    }
  };

  useEffect(() => {
    fetchPokemonsByType(type);
  }, []);

  const onTypeChange = (event) => setType(event.target.value);

  const filterFieldsInput = [
    { label: "Tipo", name: "type", value: type, onChange: onTypeChange },
  ];

  const filteredFieldsInput = filterFieldsInput.map(
    ({ label, name, value, onChange }) => (
      <label key={name}>
        {label}:
        <input type="text" name={name} value={value} onChange={onChange} />
      </label>
    )
  );

  const limitedPokemonsData = pokemonsData.slice(0, 5);

  return (
    <S.Container>
      <S.openModalButton onClick={openModal}>Abrir Modal</S.openModalButton>
      <S.modalContainer isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Filtrar Pokémons</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {filteredFieldsInput}
          <button type="button" onClick={() => fetchPokemonsByType(type)}>
            Filtrar
          </button>
        </form>
        <div>
          {limitedPokemonsData.length ? (
            <ul>
              {limitedPokemonsData.map((pokemon, index) => (
                <li key={index}>{pokemon.pokemon.name}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhum Pokémon encontrado</p>
          )}
        </div>
      </S.modalContainer>
    </S.Container>
  );
};

export default Modal;
