import { useEffect, useState } from "react";
import { BasicInformations, Header } from "../../components";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../../service/getPokemonDetails";
import { useNavigate } from "react-router-dom";
import ButtonNavigation from "../../components/ButtonNavigation";
import { useTranslation } from "react-i18next";

import * as S from "./styles";

export const Details = () => {
  const { t } = useTranslation();
  const { pokemonId } = useParams();
  const [pokemonsDetails, setPokemonsDetails] = useState();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getPokemonDetails(pokemonId);
      setPokemonsDetails(response);
    };
    fetchDetails();
  }, [pokemonId]);

  return (
    <div style={{ backgrounColor: "green" }}>
      <S.Button onClick={handleClick}>Voltar</S.Button>
      <Header />
      {pokemonsDetails && (
        <>
          <S.Container>
            <S.Photo
              alt="imagem do pokemon de frente"
              src={pokemonsDetails?.sprites?.front_default}
            />
            <S.Photo
              alt="imagem do pokemon de costas"
              src={pokemonsDetails?.sprites?.back_default}
            />
            <S.PrincipalInfos>
              {t("details.name")}:{" "}
              {pokemonsDetails.name.charAt(0).toUpperCase() +
                pokemonsDetails.name.slice(1)}
              <S.PrincipalInfos>
                {t("details.id")}: {pokemonsDetails.id}
              </S.PrincipalInfos>
            </S.PrincipalInfos>
          </S.Container>
          <BasicInformations informations={pokemonsDetails} />
          <ButtonNavigation />
        </>
      )}
    </div>
  );
};

export default Details;
