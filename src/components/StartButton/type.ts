export interface Room {
	id?: string;
	number: null;
	maxCards: number;
	limitPrizeDraw: number;
	limitRecord: number;
	limitUsers: number;
	prizeOrder: [];
	price: number;
	frequency: number;
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

 


