import * as S from "./styles";

import React from "react";
export const Card = ({ details }) => (
  <S.Card>
    <>
      <h1>{details.name.toUpperCase()}</h1>
      <S.PerfilImage
        alt="imagem do pokemon de frente"
        src={details?.sprites?.front_default}
      />
      <p>
        <b>#ID</b> {details.id}
      </p>
      <p>
        <b>Peso:</b>
        {details.weight} | <b>Altura:</b> {details.height}
      </p>
    </>
  </S.Card>
);
