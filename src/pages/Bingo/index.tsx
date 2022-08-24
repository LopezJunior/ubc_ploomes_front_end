import { useState, createContext, useContext } from "react";
import BallHistory from "components/BallHistory";
import Card from "components/Card";
import FooterBingo from "components/FooterBingo";
import BingoProvider from "Contexts/room";
import BingoButton from "components/BingoButton";
import * as S from "./style";

const MyBingo = () => {
  return (
    <S.myBingo>
      <BingoProvider>
          <FooterBingo />
          <BallHistory />
          <Card />
          <BingoButton />
      </BingoProvider>
    </S.myBingo>
  );
};

export default MyBingo;
