import { RankingService } from "services/rankingServices";
import { useEffect, useState } from "react";
import * as S from "./style";

const RankingContent = () => {
  const [list, setList] = useState([]);
  async function createRanking() {
    const rank = await RankingService.start();
    console.log(rank);
    setList(rank);
  }
  useEffect(() => {
    createRanking();
  }, []);
  return (
    <S.FullRanking>
      {list.map((i, index) => {
        console.log(i);
        return (
          <S.RankingFrame>
            <S.RankingName>{i.name}</S.RankingName>
            <S.RankingMoney>R$: {i.wallet}</S.RankingMoney>
          </S.RankingFrame>
        );
      })}
    </S.FullRanking>
  );
};

export default RankingContent;
