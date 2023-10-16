import { combineReducers, AnyAction, CombinedState } from "redux";
import { playerReducer } from "./playerReducer";
import { HYDRATE } from "next-redux-wrapper";
import { PlayerState } from "@/types/player";

export const rootReducer = combineReducers({
  player: playerReducer,
});

interface State {
  count: number;
  player: PlayerState;
}

export const reducer = (state: State, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
