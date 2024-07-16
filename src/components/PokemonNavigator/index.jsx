import { useParams, useNavigate } from "react-router-dom";
import * as S from "./styles";

export const PokemonNavigator = () => {
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
      <S.Button onClick={handlePrevious}>Anterior</S.Button>
      <S.Button onClick={handleNext}>Próximo</S.Button>
    </S.Container>
  );
};

export default PokemonNavigator;
