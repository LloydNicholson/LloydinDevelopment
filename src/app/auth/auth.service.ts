import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthState } from './store/auth.reducer';
import { login, logout, signUp } from './store/auth.action';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = null;

  constructor(
      private router: Router,
      private angularFireAuth: AngularFireAuth,
      private store: Store<{ auth: AuthState }>,
      private nzNotificationService: NzNotificationService
  ) {
    this.store.select('auth').subscribe((state) => {
      this._userIsAuthenticated = state.isAuthenticated;
    });
    this.nzNotificationService.config({nzPlacement: 'bottomRight'});
  }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  login(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.store.dispatch(login());
      this.nzNotificationService.success('Login', 'Login Successful');
      this.router.navigate(['/home']);
    });
  }

  signup(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.store.dispatch(signUp());
      this.nzNotificationService.success('Sign Up', 'Sign Up Successful. Welcome to Lloyd in Development.');
      this.router.navigate(['/home']);
    });
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(() => {
      this.store.dispatch(logout());
      this.nzNotificationService.info('Logout', 'Logout Successful');
      this.router.navigate(['/auth']);
    });
  }

  checkUserDetails() {
    // Checking if the user is already logged in from before this session
    // this.angularFireAuth.user.subscribe((response) => {
    //
    // });
  }
}
