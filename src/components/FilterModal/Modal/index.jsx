import React, { useState } from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import Filters from "../Filters";
export const Modal = ({ updateFilteredPokemon }) => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <S.Container>
      <S.OpenModalButton onClick={openModal}>
        {t("modal.filters")}
      </S.OpenModalButton>
      {modalIsOpen && (
        <S.ModalContainer isOpen={modalIsOpen} onRequestClose={closeModal}>
          <Filters updateFilteredPokemon={updateFilteredPokemon} />
        </S.ModalContainer>
      )}
    </S.Container>
  );
};
export default Modal;
