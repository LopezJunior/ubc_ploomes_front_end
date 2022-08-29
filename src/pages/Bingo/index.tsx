import { useState, createContext, useContext } from "react";
import BallHistory from "components/BallHistory";
import Card from "components/Card";
import FooterBingo from "components/FooterBingo";
import RoomProvider from "Contexts/room";
import * as S from "./style";
import BingoButton from "components/BingoButton";

const MyBingo = () => {
  return (
    <S.myBingo>
      <RoomProvider>
          <FooterBingo />
          <BallHistory />
          <Card />
          <BingoButton />
      </RoomProvider>
    </S.myBingo>
  );
};

export default MyBingo;
