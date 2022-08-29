export interface Room {
    id?: string;
    number: null;
    maxCards: string;
    limitPrizeDraw: string;
    limitRecord: string;
    limitUsers: string;
    prizeOrder: number[];
    price: string;
    frequency: string;
    historic: [];
  }
  
  export interface Vetor {
      vetor: number[];
      selecteds: number[];
      addSelected: (num: number) => void;
      
  }
  
  export interface RoomConfig {
      room: Room;
      vetor: Vetor[];
  }

 


