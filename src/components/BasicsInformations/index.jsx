import React from "react";
import * as S from "./styles";
export const BasicInformations = ({ informations }) => {
  if (!informations) {
    return null;
  }
  const infos = [
    { label: "Altura", value: informations.height },
    { label: "Peso", value: informations.weight },
    { label: "Experiência base", value: informations.base_experience },
    { label: "Ordem", value: informations.order },
  ];
  return (
    <S.BasicsInformations>
      <S.Text>
        <b>Habilidades: </b>
        {informations.abilities.map((index) => (
          <span key={index.ability.name}>{index.ability.name}, </span>
        ))}
      </S.Text>
      <S.Text>
        <b>Tipo: </b>
        {informations.types.map((index) => (
          <span key={index.type.name}>{index.type.name} </span>
        ))}
      </S.Text>
      <S.Text>
        <b>Stats: </b>
        {informations.stats.map((index) => (
          <span key={index.stat.name}>
            {index.stat.name}: {index.base_stat},
          </span>
        ))}
      </S.Text>
      {infos.map((index) => (
        <>
          <S.Text key={index.label}>
            <b>{index.label}:</b> {index.value}
          </S.Text>
        </>
      ))}
    </S.BasicsInformations>
  );
};
