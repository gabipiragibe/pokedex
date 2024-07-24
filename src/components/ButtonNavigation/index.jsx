import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const ButtonNavigation = () => {
  const { t } = useTranslation();
  const { pokemonId } = useParams();
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
        {t("button_navigation.previous_id")}: {parseInt(pokemonId) - 1}
      </S.Button>
      <S.Button onClick={handleNext}>
        {t("button_navigation.next_id")}: {parseInt(pokemonId) + 1}
      </S.Button>
    </S.Container>
  );
};

export default ButtonNavigation;
