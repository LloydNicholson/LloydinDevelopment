import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from './store/auth.reducer';
import { login, logout, signUp } from './store/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = null;
  private _user = new Subject<{ email: string, password: string }>();

  constructor(
      private router: Router,
      private angularFireAuth: AngularFireAuth,
      private store: Store<{ auth: AuthState }>
  ) {
    this.store.select('auth').subscribe((state) => {
      this._userIsAuthenticated = state.isAuthenticated;
    });
  }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  login(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.store.dispatch(login());
      this.router.navigate(['/home']);
    });
  }

  signup(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.store.dispatch(signUp());
      this.router.navigate(['/home']);
    });
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(() => {
      this.store.dispatch(logout());
      this.router.navigate(['/auth']);
    });
  }
}
