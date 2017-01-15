import { Action, Reducer } from "redux";
import { AppState, initialState } from "./appState";
import * as actionTypes from "./actionTypes";

export const rootReducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
