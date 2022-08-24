import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import { Room, RoomConfig } from "components/StartButton/type";

const BallHistory = () => {
  const maxSort = 10;
  const numberHistory: number[] = [1, 2, 3, 4, 5, 6];

  const numberBackSort: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [time, setTime] = useState(10);
  const [control, setControl] = useState<number>(0);
  const [room, setRoom] = useState<Room>();

  const status = useLocation();

  async function getState() {
    let roomParams = status.state as RoomConfig;
    setTime(+roomParams.room.frequency);
    setRoom(roomParams.room);
  }
  useEffect(() => {
    getState();
  }, []);

  let result = numberBackSort.splice(0, maxSort);
  /*  console.log(result); */

  setTimeout(() => {
    setControl(control + 1);
  }, time * 1000);

  return (
    <S.HistoryContainer>
      <>
        <S.Ball>{result[control]}</S.Ball>
        {numberHistory.map<React.ReactNode>((n, index) => {
          return <S.BallDraw key={index}>{n}</S.BallDraw>;
        })}
      </>
    </S.HistoryContainer>
  );
};

export default BallHistory;
