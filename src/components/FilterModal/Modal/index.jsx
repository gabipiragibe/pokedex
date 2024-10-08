import React, { useState } from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import CategoriesFilter from "../CategoriesFilter";
import HabitatFilter from "../HabitatFilter";

export const Modal = ({ setFilteredPokemon }) => {
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
          <p>Escolha 1 filtro por vez</p>
          {/* aplicar i18n */}
          <CategoriesFilter setFilteredPokemon={setFilteredPokemon} />
          <HabitatFilter setFilteredPokemon={setFilteredPokemon} />
        </S.ModalContainer>
      )}
    </S.Container>
  );
};

export default Modal;
