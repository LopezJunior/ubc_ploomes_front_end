import { Room, Vetor, RoomConfig } from 'components/StartButton/type';
import React , { useState, useEffect, createContext, } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

type Props = {
    children: JSX.Element,
};

type RoomContextType ={
    room: () => Room;
    getPrizeOrder: () => number[],
    getCards: () => Vetor[],
    getGameTime: () => string,
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
        getPrizeOrder:() => {return []}, 
        getCards: () => {return []},
        getGameTime: () => {return '2020-01-01T10:10:10Z' } 
    } 
);

function RoomProvider ({children}: Props) {
	const status = useLocation();
    const [time, setTime] =useState(new Date);

    function getRoom() {
		let roomParams = status.state as RoomConfig;

		return roomParams.room;
    }
    
	function getStatePrizeOrder() {
		let roomParams = status.state as RoomConfig;

        //console.log('roomParams:', roomParams);

		return roomParams.room.prizeOrder;
	}

	function getStateCards() {
		let roomParams = status.state as RoomConfig;

		return roomParams.vetor;
	}
    
    function getTime() {

        const endTime = moment(new Date()); // agora        
        const beginTime = moment(time);    // inicio do jogo

        // diferença
        const duration = moment.duration(endTime.diff(beginTime));        

        const seconds = duration.seconds();
        const minutes = duration.minutes();

        return (minutes < 10 ? '0'+minutes : minutes) +':'+( seconds < 10 ? '0'+seconds : seconds);

    }

    return (
        <RoomContext.Provider value={ { 
            room: getRoom,
            getPrizeOrder: getStatePrizeOrder, 
            getCards: getStateCards,
            getGameTime: getTime,
            } }>
            {children}
        </RoomContext.Provider> 
    )
}

export default RoomProvider;

