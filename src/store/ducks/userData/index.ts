import { Reducer } from "redux";
import { ADD_USER, REMOVE_USER, UserDispatchTypes, UserState, UserData } from './types'

const INITIAL_STATE: UserState = {
  userData: {
    name: '',
    isOlder: false
  },
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action: UserDispatchTypes) => {
  switch (action.type) {
    case ADD_USER: 
      return { userData: action.data  };
    case REMOVE_USER:
      return { userData: { name: '', isOlder: false } };
    default: return state;
  }
}

export default reducer