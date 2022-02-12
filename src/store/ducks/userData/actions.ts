import { Dispatch } from "redux"
import { ADD_USER, REMOVE_USER, UserData, UserDispatchTypes } from './types'

export const addUser = (userData: UserData) => (dispatch: Dispatch<UserDispatchTypes>) => {
  dispatch({ type: ADD_USER, data: userData })
}