import { Room, Vetor, RoomConfig } from 'components/StartButton/type';
import React , { useState, useEffect, createContext, } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
    children: JSX.Element[],
};

type RoomContextType ={
    getPrizeOrders: () => number[],
    getCards: () => Vetor[],
    /*
    selectedNumbers: number[],
    setSelecteds: (num: number) => void;
    */
}

export const RoomContext = createContext<RoomContextType | null>({ 
        getPrizeOrders:() => {return []}, 
        getCards: () => {return []},
        /*
        selectedNumbers: [], 
        setSelecteds:() => {}
        */
    } 
);

function RoomProvider ({children}: Props) {
	const [numbers, setNumbers] = useState<number[]>([]);	
    const [numberList, setNumberList] = useState<number[]>([]);
    //const [room, setRoom] = useState<Room>();
	const status = useLocation();
    
	async function getState() {
		let roomParams = status.state as RoomConfig;

		//setRoom(roomParams.room);
		//setNumbers(roomParams.vetor);
		//console.log(roomParams.vetor[0].vetor);
	}

	async function setNumbersSelected(num: number) {
		setNumberList((numberList) => [...numberList, num]);
	}

	function getStatePrizeorders() {
		let roomParams = status.state as RoomConfig;

		return roomParams.room.prizeOrders;
	}

	function getStateCards() {
		let roomParams = status.state as RoomConfig;

		return roomParams.vetor;
	}
    
    useEffect( () => {
        getState();
    }, [])

    return (
        <RoomContext.Provider value={ { 
            getPrizeOrders: getStatePrizeorders, 
            getCards: getStateCards,
            /*
            selectedNumbers: numberList, 
            setSelectedNumbers: setNumbersSelected 
            */
            } }>
            {children}
        </RoomContext.Provider> 
    )
}

export default RoomProvider;