import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  currentState = 'login';

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private angularFireAuth: AngularFireAuth,
      private nzMessageService: NzMessageService
  ) {
    this.form = fb.group(
        {
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [Validators.required, Validators.minLength(6)]),
          confirmPassword: new FormControl('', [
            this.currentState === 'signup' ? Validators.required : Validators.nullValidator,
            Validators.minLength(6)
          ])
        }
    );
  }

  ngOnInit() {
    // Checking if the user is already logged in from before this session
    this.angularFireAuth.user.subscribe(() => {

    });
  }

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    if ((this.form.value.password === this.form.value.confirmPassword) && this.currentState === 'signup') {
      this.authService.signup(email, password);
      this.nzMessageService.info('Sign up successful');
    } else if (this.currentState === 'login') {
      this.authService.login(email, password);
      this.nzMessageService.info('Login successful');
    }
    return;
  }

  onSwitchState() {
    if (this.currentState === 'signup') {
      this.currentState = 'login';
    } else {
      this.currentState = 'signup';
    }
  }
}
