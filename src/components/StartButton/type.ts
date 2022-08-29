export interface Room {
	id?: string;
	number: null;
	maxCards: string;
	limitPrizeDraw: string;
	limitRecord: string;
	limitUsers: string;
	price: string;
	frequency: string;
	historic: [];
	prizeOrder: [];
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