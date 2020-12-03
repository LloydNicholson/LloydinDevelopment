import { Action, createReducer, on } from '@ngrx/store';
import { setAuthenticated, setUnauthenticated } from './auth.action';

export interface AuthState {
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  isAuthenticated: false,
};

export const reducer = createReducer(
  initialState,
  on(setAuthenticated, (state) => ({ ...state, isAuthenticated: true })),
  on(setUnauthenticated, (state) => ({ ...state, isAuthenticated: false }))
);

export const authReducer = (state = initialState, action: Action) =>
  reducer(state, action);
