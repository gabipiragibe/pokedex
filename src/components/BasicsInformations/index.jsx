import React from "react";
import * as S from "./styles";
export const BasicInformations = ({ informations }) => {
  const infos = [
    { label: "Altura", value: informations.height },
    { label: "Peso", value: informations.weight },
    { label: "Expereiência base", value: informations.base_experience },
    { label: "Ordem", value: informations.order },
  ];
  return (
    <S.BasicsInformations>
      {infos.map((index) => (
        <S.Text key={index.label}>
          <b>{index.label}:</b> {index.value}
        </S.Text>
      ))}
    </S.BasicsInformations>
  );
};
