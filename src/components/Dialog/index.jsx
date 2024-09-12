import React, { useState } from "react";
import * as S from "./styles";

export const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <S.Container>
      <S.openModalButton onClick={openModal}>Abrir Modal</S.openModalButton>
      <S.modalContainer isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Modal</h2>
        <button>filtro 1</button>
        <button>filtro 2</button>
        <button>filtro 3</button>
      </S.modalContainer>
    </S.Container>
  );
};

export default Modal;
