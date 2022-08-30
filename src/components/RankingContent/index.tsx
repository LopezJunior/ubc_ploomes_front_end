import { RankingService } from "services/rankingServices";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import * as S from "./style";

const RankingContent = () => {
  const [list, setList] = useState([]);
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
  return (
    <S.FullRanking>
      {list.map((i: any, index) => {
        console.log(i);
        return (
          <S.RankingFrame>
            <S.RankingName>
              {index}º {i.name}
            </S.RankingName>
            <S.RankingMoney>R$: {i.wallet}</S.RankingMoney>
          </S.RankingFrame>
        );
      })}
    </S.FullRanking>
  );
};

export default RankingContent;
