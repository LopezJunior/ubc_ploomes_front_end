export interface Room {
    id: string;
    number: null;
    maxCards: number;
    limitPrizeDraw: number;
    limitRecord: number;
    limitUsers: number;
    prizeOrder: number[];
    price: number;
    frequency: number;
    historic: [];
  }
  
  export interface Vetor {
      id: string;
      vetor: number[];
      selecteds: number[];
      addSelected: (num: number) => void;
      
  }
  
  export interface RoomConfig {
      room: Room;
      vetor: Vetor[];
  }