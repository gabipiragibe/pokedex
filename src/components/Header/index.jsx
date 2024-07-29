import * as S from "./styles";
import { useTranslation } from "react-i18next";

import React from "react";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Title>{t("header.title")}</S.Title>
    </S.Container>
  );
};
