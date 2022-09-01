import { Room, Vetor, RoomConfig } from "components/StartButton/type";
import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

type Props = {
  children: JSX.Element;
};

type RoomContextType = {
  room: () => Room; // container para as configurações da sala
  getPrizeOrder: () => number[]; // numeros a sortear q vieram do backend
  getCards: () => Vetor[]; // cartelas do jogo
  getGameTime: () => string; // tempo da partida
  getDrawNumbers: () => number[]; // números sorteados na partida
  addDrawNumbers: (n: number) => void; // add números sorteados a um array
};

export const RoomContext = createContext<RoomContextType | null>({
  room: () => {
    return {
      id: "",
      number: null,
      maxCards: 3,
      limitPrizeDraw: 75,
      limitRecord: 3,
      limitUsers: 0,
      prizeOrder: [],
      price: 2,
      frequency: 7,
      historic: [],
    };
  },
  getPrizeOrder: () => {
    return [];
  },
  getCards: () => {
    return [];
  },
  getGameTime: () => {
    return "2020-01-01T10:10:10Z";
  },
  getDrawNumbers: () => {
    return [];
  },
  addDrawNumbers: (n: number) => {
    return [];
  },
});

function RoomProvider({ children }: Props) {
  const status = useLocation();
  const [time, setTime] = useState(new Date());
  const [drawNumbers, setDrawNumbers] = useState<number[]>([]);

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

  function getTime() {
    const endTime = moment(new Date()); // agora
    const beginTime = moment(time); // inicio do jogo

    // diferença
    const duration = moment.duration(endTime.diff(beginTime));

    const seconds = duration.seconds();
    const minutes = duration.minutes();

    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  }

  function _getDrawNumbers() {
    return drawNumbers;
  }

  function _addDrawNumbers(n: number) {
    setDrawNumbers([...drawNumbers, n]);
  }

  return (
    <RoomContext.Provider
      value={{
        room: getRoom,
        getPrizeOrder: getStatePrizeOrder,
        getCards: getStateCards,
        getGameTime: getTime,
        getDrawNumbers: _getDrawNumbers,
        addDrawNumbers: _addDrawNumbers,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
