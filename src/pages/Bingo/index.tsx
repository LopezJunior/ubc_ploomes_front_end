import BallHistory from "components/BallHistory";
import Card from "components/Card";
import FooterBingo from "components/FooterBingo";
import * as S from "./style";

const MyBingo = () => {
  return (
    <RoomProvider>
      <S.myBingo>
        <FooterBingo />
        <BallHistory />
        <S.Desk>
          <Card />
          <BingoButton />
        </S.Desk>
      </S.myBingo>
    </RoomProvider>
  );
};

export default MyBingo;
