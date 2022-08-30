import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import { Room, RoomConfig } from "components/StartButton/type";


const BallHistory = () => {
	const status = useLocation();
	const [maxSort, setMaxSort] = useState(1);
	let [lastNumberHistory, setLastNumberHistory] = useState<any[]>([0]);
	const [numberHistory, setNumberHistory] = useState<number[]>([]);
	const [time, setTime] = useState(2);
	const [control, setControl] = useState<number>(0);
	const [room, setRoom] = useState<Room>();
	let backSort: any[] = [];
	backSort.push(room?.prizeOrder.map((e) => e));

	console.log(backSort[0]?.splice(0, 5));

	async function getState() {
		let roomParams = status.state as RoomConfig;
		setTime(+roomParams.room.frequency);
		setRoom(roomParams.room);
		setMaxSort(Number(roomParams.room.limitPrizeDraw));
	}
	useEffect(() => {
		setNumberHistory(() => [...numberHistory, result[control]]);
		for (let i = 0; i < 6; i++) {
			lastNumberHistory[i] = numberHistory[numberHistory.length - (i + 1)];
		}
		getState();
	}, [control]);

	let result = backSort[0]?.splice(0, maxSort);

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
};;

export default BallHistory;
