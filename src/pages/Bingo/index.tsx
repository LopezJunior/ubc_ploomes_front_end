import { useState, createContext, useContext } from "react";
import BallHistory from "components/BallHistory";
import BingoButton from "components/BingoButton";
import Card from "components/Card";
import FooterBingo from "components/FooterBingo";
import RoomProvider from "Contexts/room";
import * as S from "./style";
import BingoButton from "components/BingoButton";

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
