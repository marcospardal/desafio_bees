import { combineReducers } from "redux";

import UserDataReducer from './userData'
import CardsReducer from './cards'

export default combineReducers({
  UserDataReducer,
  CardsReducer
})