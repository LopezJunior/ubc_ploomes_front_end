import React, { useState, useEffect, useContext } from "react";
import * as S from "./style";
import { RoomContext } from "Contexts/room";
import { Vetor } from "components/StartButton/type";
import classNames from 'classnames';

const Card = () => {
	/* const [cards, setCards] = useState<Vetor[]>(); */
	const context = useContext(RoomContext);
	const cardNumbers = Number(context?.getCards()!.length);
	const [isSelect, setIsSelect] = useState<any[][]>(
		new Array(cardNumbers).fill(false).map(() => new Array(25).fill(false))
	);

	//const [numberList, setNumberList] = useState<any[]>([]);

	/*
  async function initialize() {
    setCards(context?.getCards()!);
  }
*/
	useEffect(() => {
		/*  initialize(); */
	}, []);

	return (
		<>
			<S.Content>
				{context?.getCards()!.map<React.ReactNode>((card, cardIndex) => (
					<S.Parent key={cardIndex}>
						<S.Title>
							<S.TitleB>b</S.TitleB>
							<S.TitleI>i</S.TitleI>
							<S.TitleN>n</S.TitleN>
							<S.TitleG>g</S.TitleG>
							<S.TitleO>o</S.TitleO>
						</S.Title>
						<S.Ball>
							{card.vetor.map<React.ReactNode>((n: any, index) => {
								return (
									<div
										key={index}
										className={`Number${index + 1}`}
										onClick={() => {
											if (!isSelect[cardIndex][index]) {
												let copy = [...isSelect];
												copy[cardIndex][index] = true;
												setIsSelect(copy);
											} else {
												let copy = [...isSelect];
												copy[cardIndex][index] = false;
												setIsSelect(copy);
											}
											if (!card.selecteds) {
												card.selecteds = [];
											}
											const isDuplicate = card.selecteds.findIndex(
												(num) => num === n
											);
											if (isDuplicate === -1) {
												card.selecteds.push(n);
												/* console.log('add', card.selecteds); */
											} else {
												let copy = card.selecteds.filter((item) => item !== n);
												card.selecteds = copy;

												/* console.log('remove', card.selecteds); */
											}
										}}
									>
										<div
											className={`${
												isSelect[cardIndex][index] ? 'selected' : ''
											}`}
										>
											{n}
											{/*console.log(numberList)*/}
										</div>
									</div>
								);
							})}
						</S.Ball>
					</S.Parent>
				))}
			</S.Content>
		</>
	);
};;;;;;;

export default Card;


/* () => {
                      setIsSelect(
                        isSelect.map((bool, j) => {
                          if (j === index) {
                            // array de numeros selecionados ainda não inicializado
                            if (!card.selecteds) {
                              card.selecteds = [];
                            }
                            const isDuplicate = card.selecteds.findIndex(
                              (num) => num === n
                            );
                            if (isDuplicate === -1) {
                              //setNumberList((numberList) => [...numberList, n]);
                              //card.addSelected(n);
                              card.selecteds.push(n);
                            }
                            return true;
                          } else {
                            return bool;
                          }
                        })
                      );
                    } */
