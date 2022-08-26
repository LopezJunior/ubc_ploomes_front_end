import { Room, RoomConfig } from 'components/StartButton/type';
import React , { useState, useEffect, createContext, } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
    children: JSX.Element[],
};

type BingoType ={
    getNumbers: () => number[],
    selecteds: number[],
    setSelecteds: (num: number) => void;
}

export const RoomContext = createContext<BingoType | null>({ 
    getNumbers:() => {return []}, 
    selecteds: [], 
    setSelecteds:() => {}} );

function RoomProvider ({children}: Props) {
	const [numbers, setNumbers] = useState<number[]>([]);	
    const [numberList, setNumberList] = useState<number[]>([]);
    //const [room, setRoom] = useState<Room>();
	const status = useLocation();
    
	async function getState() {
		let roomParams = status.state as RoomConfig;

		//setRoom(roomParams.room);
		//setNumbers(roomParams.vetor);
		console.log(roomParams.vetor[0].vetor);
	}

	async function setNumberSelecteds(num: number) {
		setNumberList((numberList) => [...numberList, num]);
	}

	function getStateNumbers() {
		let roomParams = status.state as RoomConfig;

		return roomParams.vetor[0].vetor;
	}
    
    useEffect( () => {
        getState();
    }, [])

    return (
        <RoomContext.Provider value={ { 
                        getNumbers: getStateNumbers, 
                        selecteds: numberList, 
                        setSelecteds: setNumberSelecteds } }>
            {children}
        </RoomContext.Provider> 
    )
}

export default RoomProvider;