import { createAction } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const signUp = createAction('[Auth] Sign Up');
export const logout = createAction('[Auth] Logout');

