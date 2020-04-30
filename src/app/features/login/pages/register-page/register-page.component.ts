import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import * as RegisterPageActions from '../../actions/register-page.actions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onFormSubmit(user: User) {
    this.store.dispatch(RegisterPageActions.createUser(user));
  }
}
