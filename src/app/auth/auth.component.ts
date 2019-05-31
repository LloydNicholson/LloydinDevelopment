import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group(
        {
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [Validators.required, Validators.minLength(6)]),
          optionSelected: new FormControl('Option 1')
        }
    );
  }

  onSubmit() {
    console.log(this.form);
  }
}
