import { Room, Vetor, RoomConfig } from "components/StartButton/type";
import React, { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

type RoomContextType ={
    room: () => Room;
    getPrizeOrder: () => number[],
    getCards: () => Vetor[],
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
});

function RoomProvider({ children }: Props) {
  const status = useLocation();

  function getRoom() {
    let roomParams = status.state as RoomConfig;

    return roomParams.room;
  }

  function getStatePrizeOrder() {
    let roomParams = status.state as RoomConfig;

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
            getPrizeOrder: getStatePrizeOrder, 
            getCards: getStateCards,
            } }>
            {children}
        </RoomContext.Provider> 
    )
}

export default RoomProvider;

