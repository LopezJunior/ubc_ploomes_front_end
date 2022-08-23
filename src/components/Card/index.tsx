import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import * as S from "./style";
import { Room, RoomConfig } from "components/StartButton/type"

const Card = () => {
  const [room, setRoom] = useState<Room>();
  const [numbersSort, setNumberSort] = useState<number[]>([
    1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,]
  );
  const status = useLocation();

  async function getState() {
    let roomParams = status.state as RoomConfig;

    setRoom( roomParams.room );
    setNumberSort( roomParams.vetor );
  }

  useEffect( () => {

    getState();

  }, []);

  return (
    <>
      <S.Parent>
        <S.Title>
          <S.TitleB>b</S.TitleB>
          <S.TitleI>i</S.TitleI>
          <S.TitleN>n</S.TitleN>
          <S.TitleG>g</S.TitleG>
          <S.TitleO>o</S.TitleO>
        </S.Title>
        <S.Ball>
          {numbersSort!.map<React.ReactNode>((n: any, index) => {
            return (
              <div key={index} className={`Number${n}`}>
                {n}
              </div>
            );
          })}
        </S.Ball>
      </S.Parent>
    </>
  );
};

export default Card;
