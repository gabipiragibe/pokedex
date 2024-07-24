import * as S from "./styles";
import { useTranslation } from "react-i18next";

import React from "react";
export const Card = ({ details }) => {
  const { t } = useTranslation();

  return (
    <S.Card>
      <>
        <h1>{details.name.toUpperCase()}</h1>
        <S.PerfilImage
          alt="imagem do pokemon de frente"
          src={details?.sprites?.front_default}
        />
        <p>
          <b>{t("card.id")}:</b> {details.id}
        </p>
        <p>
          <b>{t("card.weight")}:</b>
          {details.weight} | <b>{t("card.height")}:</b> {details.height}
        </p>
      </>
    </S.Card>
  );
};
