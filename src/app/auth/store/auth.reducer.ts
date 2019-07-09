import { createReducer, on } from '@ngrx/store';
import { login, logout, signUp } from './auth.action';

export interface AuthState {
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  isAuthenticated: false
};

export const authReducer = createReducer(
    initialState,
    on(login, (state) => ({ isAuthenticated: state.isAuthenticated = true })),
    on(signUp, (state) => ({ isAuthenticated: state.isAuthenticated = true })),
    on(logout, (state) => ({ isAuthenticated: state.isAuthenticated = false })),
);
