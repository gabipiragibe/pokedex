import React from "react";
import * as S from "./styles";
export const BasicInformations = ({ informations }) => {
  return (
    <S.BasicsInformations>
      <S.Text>
        <strong>Altura:</strong> {informations.height}
      </S.Text>
      <S.Text>
        <strong>Peso:</strong> {informations.weight}
      </S.Text>
      <S.Text>
        <strong>Experiência base:</strong> {informations.base_experience}
      </S.Text>
      <S.Text>
        <strong>Ordem:</strong> {informations.order}
      </S.Text>
    </S.BasicsInformations>
  );
};
