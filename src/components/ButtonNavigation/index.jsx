import { useParams, useNavigate } from "react-router-dom";
import * as S from "./styles";

export const ButtonNavigation = () => {
  const { pokemonId } = useParams(); // acessar parametros da rota
  const navigate = useNavigate();

  const handlePrevious = () => {
    const previous = Math.max(1, parseInt(pokemonId) - 1);
    navigate(`/details/${previous}`);
  };

  const handleNext = () => {
    const next = parseInt(pokemonId) + 1;
    navigate(`/details/${next}`);
  };

  return (
    <S.Container>
      <S.Button onClick={handlePrevious}>
        Anterior ID: {parseInt(pokemonId) - 1}
      </S.Button>
      <S.Button onClick={handleNext}>
        Próximo ID: {parseInt(pokemonId) + 1}
      </S.Button>
    </S.Container>
  );
};

export default ButtonNavigation;
