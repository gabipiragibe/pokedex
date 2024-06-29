import * as S from "./styles";
export const Card = ({ details }) => (
  <S.Card>
    <>
      <h1>{details.name}</h1>
      <S.PerfilImage
        alt="imagem do details"
        src={details?.sprites?.front_default}
      />
      <p>
        <strong>#ID</strong> {details.id}
      </p>
      <p>
        <strong>Peso:</strong>
        {details.weight} | <strong>Altura:</strong> {details.height}
      </p>
    </>
  </S.Card>
);
