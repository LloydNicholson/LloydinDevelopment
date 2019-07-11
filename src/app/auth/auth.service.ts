import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthState } from './store/auth.reducer';
import { setAuthenticated, setUnauthenticated } from './store/auth.action';
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
    this.nzNotificationService.config({ nzPlacement: 'bottomRight' });
  }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  //
  // initAuthListener() {
  //   this.angularFireAuth.authState.subscribe(user => {
  //     if (user) {
  //       this.store.dispatch(setAuthenticated());
  //       this.router.navigate(['/home']);
  //     } else {
  //       this.store.dispatch(setUnauthenticated());
  //       this.router.navigate(['/auth']);
  //     }
  //   });
  // }

  login(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(
        () => {
          this.router.navigate(['/home']);
          this.store.dispatch(setAuthenticated());
          this.nzNotificationService.success('Login', 'Login Successful');
        },
        (error) => {
          console.log(error);
        });
  }

  signup(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(
        () => {
          this.router.navigate(['/home']);
          this.store.dispatch(setAuthenticated());
          this.nzNotificationService.success('Sign Up', 'Sign Up Successful. Welcome to Lloyd in Development.');
        },
        (error) => {
          console.log(error);
        });
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(
        () => {
          this.router.navigate(['/auth']);
          this.store.dispatch(setUnauthenticated());
          this.nzNotificationService.info('Logout', 'Logout Successful');
        },
        (error) => {
          console.log(error);
        });
  }
}
