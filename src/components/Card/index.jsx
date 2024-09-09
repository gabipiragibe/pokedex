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
          alt={t("images.front_default")}
          src={details?.sprites?.front_default}
        />
        <p>
          <b>{t("pokemon_infos.id")}:</b> {details.id}
        </p>
        <p>
          <b>{t("pokemon_infos.weight")}:</b>
          {details.weight} | <b>{t("pokemon_infos.height")}:</b>{" "}
          {details.height}
        </p>
      </>
    </S.Card>
  );
};

export default Card;
