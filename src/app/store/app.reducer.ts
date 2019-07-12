import { Action, createReducer, on } from '@ngrx/store';
import { startLoading, stopLoading } from './app.action';
import { AuthState } from '../auth/store/auth.reducer';

export interface State {
  isLoading: boolean;
}

export interface AppState {
  app: State,
  auth: AuthState
}

const initialState: State = {
  isLoading: false
};

const reducer = createReducer(
    initialState,
    on(startLoading, (state) => ({ ...state, isLoading: true })),
    on(stopLoading, (state) => ({ ...state, isLoading: false }))
);

export function appReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
