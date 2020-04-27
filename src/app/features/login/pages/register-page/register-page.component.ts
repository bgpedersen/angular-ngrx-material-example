import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onFormSubmit(user: User) {
    this.userService.post(user).subscribe(
      (res) => {
        this.snackBar.open('Success! User created');
        this.router.navigateByUrl('');
      },
      (err) => {
        this.snackBar.open(`Error: ${err}`);
        console.error(err);
      }
    );
  }
}
