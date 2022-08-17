import BallHistory from "components/BallHistory";
import FooterBingo from "components/FooterBingo";
import * as S from "./style";

const MyBingo = () => {
  return (
    <S.myBingo>
      <FooterBingo />
      <BallHistory />
    </S.myBingo>
  );
};

export default MyBingo;
