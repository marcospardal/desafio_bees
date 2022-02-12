import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { UserState } from "./ducks/userData/types";
import thunk from 'redux-thunk'

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  loading: false,
  user: UserState,
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>

export default store;
