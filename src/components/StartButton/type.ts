export interface Room {
    id: string;
    number: null;
    maxCards: number;
    limitPrizeDraw: number;
    limitRecord: number;
    limitUsers: number;
    prizeOrders: number[];
    price: number;
    frequency: number;
    historic: [];
  }
  
  export interface Vetor {
      id: string;
      vetor: number[];
      selecteds: number[];
  }
  
  export interface RoomConfig {
      room: Room;
      vetor: Vetor[];
  }