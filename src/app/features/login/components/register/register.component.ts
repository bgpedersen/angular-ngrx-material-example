import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<User>();
  hide = true;

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    info: this.fb.group({
      firstname: [''],
      lastname: [''],
    }),
  });

  controls = {
    email: this.registerForm.get('email'),
    password: this.registerForm.get('password'),
    firstname: this.registerForm.get('info.firstname'),
    lastname: this.registerForm.get('info.lastname'),
  };

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    const user = new User({
      ...this.registerForm.value,
      firstname: this.controls.firstname.value,
      lastname: this.controls.lastname.value,
    });
    this.formSubmit.emit(user);
  }

  ngOnInit(): void {}
}
