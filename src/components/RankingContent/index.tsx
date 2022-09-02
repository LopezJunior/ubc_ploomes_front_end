import { RankingService } from "services/rankingServices";
import { useEffect, useState } from "react";
import ButtonWhite from "components/ButtonWhite";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo_cinturao.png";
import Swal from "sweetalert2";
import * as S from "./style";

const RankingContent = () => {
  const [list, setList] = useState([]);
  const navigation = useNavigate();
  async function createRanking() {
    Swal.fire({
      icon: "success",
      title: "Carregando Ranking...",
      showConfirmButton: false,
      timer: 1000,
    });
    const rank = await RankingService.start();
    console.log(rank);
    setList(rank);
  }
  useEffect(() => {
    createRanking();
  }, []);

  let icons = [
    "https://i.imgur.com/3Yx31xp.png",
    "https://i.imgur.com/aj8vSyh.png",
    "https://i.imgur.com/yUWDAwN.png",
    "https://i.imgur.com/v6j4Csi.png",
  ];

  let backToHome = () => {
    return navigation("/");
  };

  return (
    <>
      <a onClick={backToHome}>
        <ButtonWhite value={"Voltar"} type={"button"} />
      </a>
      <S.FullRanking>
        {list.map((i: any, index) => {
          let randon = Math.floor(Math.random() * 4);
          return (
            <S.RankingFrame key={index}>
              <S.ContentLeft>
                <S.Img src={icons[randon]} />
                <S.RankingName>- {i.name}</S.RankingName>
              </S.ContentLeft>
              <S.ContentRight>
                <S.RankingMoney>R$: {i.wallet}</S.RankingMoney>
              </S.ContentRight>
            </S.RankingFrame>
          );
        })}
      </S.FullRanking>
      <S.Logo src={logo} />
    </>
  );
};

export default RankingContent;
