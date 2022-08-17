import ButtonRedLarge from "components/ButtonRedLarge";
import * as S from "./style";

const FooterBingo = () => {
  return (
    <S.TitleBingo>
      <S.StopWatch>
        <S.Number>10</S.Number>
        <S.Seconds>Segundos</S.Seconds>
      </S.StopWatch>
      <S.Title>UBC</S.Title>
      <ButtonRedLarge value={"reset"} type={"button"} />
    </S.TitleBingo>
  );
};

export default FooterBingo;
