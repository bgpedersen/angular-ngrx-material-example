import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import { createUser } from '../../actions/register-page.actions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    // private router: Router,
    // private userService: UsersService,
    // private snackBar: MatSnackBar
    private store: Store
  ) {}

  ngOnInit(): void {}

  onFormSubmit(user: User) {
    this.store.dispatch(createUser(user));

    // this.userService.post(user).subscribe(
    //   (res) => {
    //     this.snackBar.open('Success! User created');
    //     this.router.navigateByUrl('');
    //   },
    //   (err) => {
    //     this.snackBar.open(`Error: ${err}`);
    //     console.error(err);
    //   }
    // );
  }
}
