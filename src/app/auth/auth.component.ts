import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  currentState = 'setAuthenticated';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        this.currentState === 'signup'
          ? Validators.required
          : Validators.nullValidator,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {}

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    if (
      this.form.value.password === this.form.value.confirmPassword &&
      this.currentState === 'signup'
    ) {
      this.authService.signup(email, password);
    } else if (this.currentState === 'setAuthenticated') {
      this.authService.login(email, password);
    }
    return;
  }

  onSwitchState() {
    if (this.currentState === 'signup') {
      this.currentState = 'setAuthenticated';
    } else {
      this.currentState = 'signup';
    }
  }
}
