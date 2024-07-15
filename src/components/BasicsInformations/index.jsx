import React from "react";
import * as S from "./styles";
export const BasicInformations = ({ informations }) => {
  return (
    <S.BasicsInformations>
      <S.Text>
        <b>Altura:</b> {informations.height}
      </S.Text>
      <S.Text>
        <b>Peso:</b> {informations.weight}
      </S.Text>
      <S.Text>
        <b>Experiência base:</b> {informations.base_experience}
      </S.Text>
      <S.Text>
        <b>Ordem:</b> {informations.order}
      </S.Text>
    </S.BasicsInformations>
  );
};
