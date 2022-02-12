// action type
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

interface AddUser {
  type: typeof ADD_USER,
  data: {
    name: string;
    isOlder: boolean;
  }
}

interface RemoveUser {
  type: typeof REMOVE_USER
}

export type UserDispatchTypes = AddUser | RemoveUser

// data type
export interface UserData {
  name: string;
  isOlder: boolean;
}

// state type
export interface UserState {
  readonly userData: UserData
}