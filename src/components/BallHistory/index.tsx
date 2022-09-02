import React, { useState, useEffect, useContext } from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import { Room, RoomConfig } from "components/StartButton/type";
import { RoomContext } from "Contexts/room";

import { RoutePath } from "types/routes";
import { useNavigate } from "react-router-dom";

const BallHistory = () => {
  const status = useLocation();
  const [maxSort, setMaxSort] = useState(1);
  let [lastNumberHistory, setLastNumberHistory] = useState<any[]>([0]);
  const [numberHistory, setNumberHistory] = useState<number[]>([]);
  const [time, setTime] = useState(2);
  const [control, setControl] = useState<number>(0);
  const [room, setRoom] = useState<Room>();
  const context = useContext(RoomContext);
  let backSort: any[] = [];

  const navigate = useNavigate();

  async function getState() {
    let roomParams = status.state as RoomConfig;
    setTime(+roomParams.room.frequency);
    setRoom(roomParams.room);
    setMaxSort(roomParams.room.limitPrizeDraw);
  }

  useEffect(() => {
    setNumberHistory(() => [...numberHistory, result[control]]);
    for (let i = 0; i < 6; i++) {
      lastNumberHistory[i] = numberHistory[numberHistory.length - (i + 1)];
    }
    getState();
  }, [control]);

  for (let i = 0; i < Number(room?.prizeOrder.length); i++) {
    let temp: any = room?.prizeOrder.map((e) => e);
    backSort.push(Number(temp[i]));
  }

  let result = backSort.splice(0, maxSort);
  /* console.log(result); */
  let drawNumbers = context?.getDrawNumbers()!;
  let gameTime = context?.getGameTime();
  setTimeout(() => {
    if (control < result.length) {
      // adiciona novo numero sorteado
      context?.addDrawNumbers(result[control + 1]);
      //
      setControl(control + 1);
    } else if (control > result.length) {
      console.log("teste");
      navigate(RoutePath.DEFEATMODAL, {
        state: { gameTime: gameTime, drawNumbers: drawNumbers.length },
      });
    }
  }, time * 1000);

  return (
    <S.HistoryContainer>
      <>
        <S.Ball>{result[control]}</S.Ball>
        {lastNumberHistory.map<React.ReactNode>((n, index) => {
          return <S.BallDraw key={index}>{n}</S.BallDraw>;
        })}
      </>
    </S.HistoryContainer>
  );
};

export default BallHistory;
