import { Action, createReducer, on } from '@ngrx/store';
import { login, logout, signUp } from './auth.action';

export interface AuthState {
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  isAuthenticated: false
};

export const reducer = createReducer(
    initialState,
    on(login, (state) => ({ ...state, isAuthenticated: state.isAuthenticated = true })),
    on(signUp, (state) => ({ ...state, isAuthenticated: state.isAuthenticated = true })),
    on(logout, (state) => ({ ...state, isAuthenticated: state.isAuthenticated = false })),
);

export function authReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
