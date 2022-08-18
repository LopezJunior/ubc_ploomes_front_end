import BallHistory from "components/BallHistory";
import Card from "components/Card";
import FooterBingo from "components/FooterBingo";
import * as S from "./style";

const MyBingo = () => {
  return (
    <S.myBingo>
      <FooterBingo />
      <BallHistory />
      <Card />
    </S.myBingo>
  );
};

export default MyBingo;
