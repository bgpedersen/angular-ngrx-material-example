import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() user = new EventEmitter();
  loginForm: FormGroup = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    this.user.emit(this.loginForm.value);
  }
}
