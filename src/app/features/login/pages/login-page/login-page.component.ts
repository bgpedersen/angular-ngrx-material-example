import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Login } from 'src/app/core/models/login.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login(login: Login) {
    this.usersService
      .login(login)
      .pipe(take(1))
      .subscribe(
        (res) => {
          console.log('success', res);
          this.authService.setAuthenticated(true);
          this.router.navigateByUrl('/dashboard');
        },
        (err) => console.error(err)
      );
  }
}
