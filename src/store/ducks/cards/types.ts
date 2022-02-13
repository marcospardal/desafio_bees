// action type
export const CARDS_LOADING = 'CARDS_LOADING';
export const CARDS_SUCCESS = 'CARDS_SUCCESS';
export const CARDS_FAIL = 'CARDS_FAIL';
export const REMOVE_CARD = "REMOVE_CARD";

interface CardsLoading {
  type: typeof CARDS_LOADING,
}

interface CardsSuccess {
  type: typeof CARDS_SUCCESS,
  payload: {
    cards: Card[]
  }
}

interface CardsFail {
  type: typeof CARDS_FAIL
}

interface RemoveCard {
  type: typeof REMOVE_CARD,
  data: {
    cardId: number;
  }
}

export type CardsDispatchTypes = CardsLoading | CardsSuccess | CardsFail | RemoveCard

// data type 
export interface Card {
  title: string;
  city: string;
  state: string;
  street: string;
  country: string;
  type: string;
  postalCode: string;
  telephone: string;
  optional?: string;
}

// state type
export interface CardsState {
  readonly data: Card[],
  readonly loading: boolean,
}