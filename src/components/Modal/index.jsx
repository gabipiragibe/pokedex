import React, { useState } from "react";
import * as S from "./styles";
import { getPokemonDetails } from "../../service/getPokemonDetails";

export const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokemonsData, setPokemonsData] = useState([]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const applyFilter = async () => {
    const response = await getPokemonDetails();
    setPokemonsData(response);
  };

  const filterFields = [
    { label: "Nome", name: "name" },
    { label: "Peso", name: "weight" },
    { label: "Altura", name: "height" },
  ];

  const filteredFieldsInput = filterFields.map(({ label, name }) => (
    <label key={name}>
      {label}:
      <input type="text" name={name} />
    </label>
  ));

  return (
    <S.Container>
      <S.openModalButton onClick={openModal}>Abrir Modal</S.openModalButton>
      <S.modalContainer isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Filtrar Pokémons</h2>
        <form onSubmit={applyFilter}>
          {filteredFieldsInput}
          <button type="submit">Filtrar</button>
        </form>
      </S.modalContainer>
    </S.Container>
  );
};

export default Modal;
