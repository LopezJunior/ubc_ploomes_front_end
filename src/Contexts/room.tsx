import { Room, Vetor, RoomConfig } from 'components/StartButton/type';
import React , { useState, useEffect, createContext, } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
    children: JSX.Element,
};

type RoomContextType ={
    room: () => Room;
    getPrizeOrders: () => number[],
    getCards: () => Vetor[],
    /*
    selectedNumbers: number[],
    setSelecteds: (num: number) => void;
    */
}

export const RoomContext = createContext<RoomContextType | null>({ 
        room: () => {return { 
                id: '',
                number: null,
                maxCards: 3,
                limitPrizeDraw: 75,
                limitRecord: 3,
                limitUsers: 0,
                prizeOrder: [],
                price: 2,
                frequency: 7,
                historic: []
            } },
        getPrizeOrders:() => {return []}, 
        getCards: () => {return []},
        /*
        selectedNumbers: [], 
        setSelecteds:() => {}
        */
    } 
);

function RoomProvider ({children}: Props) {
	const status = useLocation();

    function getRoom() {
		let roomParams = status.state as RoomConfig;

		return roomParams.room;
    }
    
	function getStatePrizeOrders() {
		let roomParams = status.state as RoomConfig;

        console.log('roomParams:', roomParams);

		return roomParams.room.prizeOrder;
	}

	function getStateCards() {
		let roomParams = status.state as RoomConfig;

		return roomParams.vetor;
	}
    
    /*
    useEffect( () => {
        getState();
    }, [])
    */

    return (
        <RoomContext.Provider value={ { 
            room: getRoom,
            getPrizeOrders: getStatePrizeOrders, 
            getCards: getStateCards,
            } }>
            {children}
        </RoomContext.Provider> 
    )
}

export default RoomProvider;
