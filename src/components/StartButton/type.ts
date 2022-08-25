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
}

export interface Vetor {
	vetor: number[];
}

export interface RoomConfig {
	room: Room;
	vetor: Vetor[];
}
