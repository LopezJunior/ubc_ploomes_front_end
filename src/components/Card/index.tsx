import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import * as S from "./style";
import { Room, RoomConfig } from "components/StartButton/type"

const Card = () => {
	const [numbersSort, setNumberSort] = useState<number[]>([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
	]);
	/* let numbersSort: number[] = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25,
	]; */
	const [isSelect, setIsSelect] = useState(() => numbersSort.map(() => false));
	const [numberList, setNumberList] = useState<any[]>([]);
	const [room, setRoom] = useState<Room>();

	const status = useLocation();

	async function getState() {
		let roomParams = status.state as RoomConfig;

		setRoom(roomParams.room);
		setNumberSort(roomParams.vetor);
	}

	useEffect(() => {
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
					{numbersSort.map<React.ReactNode>((n: any, index) => {
						return (
							<div
								key={index}
								className={`Number${n}`}
								onClick={() => {
									setIsSelect(
										isSelect.map((bool, j) => {
											if (j === index) {
												const isDuplicate = numberList.findIndex(
													(num) => num === n
												);
												if (isDuplicate === -1) {
													setNumberList((numberList) => [...numberList, n]);
												}
												return true;
											} else {
												return bool;
											}
										})
									);
								}}
							>
								<div className={`${isSelect[index] ? 'selected' : ''}`}>
									{n}
									{console.log(numberList)}
								</div>
							</div>
						);
					})}
				</S.Ball>
			</S.Parent>
		</>
	);
};

export default Card;
