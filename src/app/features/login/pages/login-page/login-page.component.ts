import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Login } from 'src/app/core/models/login.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  login(login: Login) {
    this.usersService.login(login).subscribe(
      (res) => {
        console.log('success', res);
      },
      (err) => console.error(err)
    );
  }
}
