import { Reducer } from "redux";
import { CardsDispatchTypes, CARDS_FAIL, CARDS_LOADING, CARDS_SUCCESS, CardsState } from './types'

const INITIAL_STATE: CardsState = {
  data: [],
  loading: false
}

const reducer: Reducer<CardsState> = (state = INITIAL_STATE, action: CardsDispatchTypes) => {
  switch(action.type) {
    case CARDS_LOADING: 
      return { ...state, loading: true }
    case CARDS_FAIL: 
      return { ...state, loading: false }
    case CARDS_SUCCESS:
      return { ...state, loading: false, data: action.payload.cards }
    default:
      return state
  }
}

export default reducer