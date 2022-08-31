import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import { Room, RoomConfig } from "components/StartButton/type";

const BallHistory = () => {
	const maxSort = 30;
	let [lastNumberHistory, setLastNumberHistory] = useState<number[]>([
		0, 0, 0, 0, 0, 0,
	]);
	const [numberHistory, setNumberHistory] = useState<number[]>([]);
	const backSort: number[] = [
		75, 62, 13, 64, 5, 46, 7, 18, 29, 10, 21, 52, 73, 14, 16, 18, 25, 34, 45,
		65,
	];
	const tempBackEnd = 2;
	const [time, setTime] = useState(tempBackEnd);
	const [control, setControl] = useState<number>(0);

  	const [room, setRoom] = useState<Room>();

  	const status = useLocation();

  async function getState() {
    let roomParams = status.state as RoomConfig;
    setTime(+roomParams.room.frequency);
    setRoom(roomParams.room);
  }
  useEffect(() => {
		setNumberHistory(() => [...numberHistory, result[control]]);
		for (let i = 0; i < 6; i++) {
			lastNumberHistory[i] = numberHistory[numberHistory.length - (i + 1)];
		}
    getState();
  }, [control]);

	let result = backSort.splice(0, maxSort);
  /*  console.log(result); */

	setTimeout(() => {
		if (control < result.length) {
			setControl(control + 1);
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
