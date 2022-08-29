import React, { useState, useEffect } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';
import { Room, RoomConfig } from 'components/StartButton/type';

const BallHistory = () => {
	const status = useLocation();
	const maxSort = 30;
	let [lastNumberHistory, setLastNumberHistory] = useState<number[]>([
		0, 0, 0, 0, 0, 0,
	]);
	const [numberHistory, setNumberHistory] = useState<number[]>([]);
	let [backSort, setBackSort] = useState<any[]>([]);
	const tempBackEnd = 30;
	const [time, setTime] = useState(tempBackEnd);
	const [control, setControl] = useState<number>(0);

	const [room, setRoom] = useState<Room>();

	async function getState() {
		let roomParams = status.state as RoomConfig;
		backSort[control] = roomParams.room.prizeOrder.map((e) => e);
		setTime(+roomParams.room.frequency);
		setRoom(roomParams.room);
		console.log(
			'teste',
			backSort.map((e) => e)
		);
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
