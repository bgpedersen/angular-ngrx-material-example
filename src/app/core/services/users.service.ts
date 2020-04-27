import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  emailAlreadyExists(email: string) {
    return this.http.get<User[]>(`${this.url}?email=${email}`).pipe(
      map((res) => {
        if (res.length > 0) {
          return true;
        }

        return false;
      })
    );
  }

  post(user: User) {
    return this.emailAlreadyExists(user.email).pipe(
      switchMap((exists) => {
        if (exists) {
          console.error('User already exists!');
          return throwError('User already exists!');
        }

        return this.http.post(`${this.url}`, user).pipe(
          catchError((err) => {
            console.error(err);
            return throwError(err);
          })
        );
      })
    );
  }

  login(login: Login) {
    return this.http
      .get<User[]>(
        `${this.url}?email=${login.email}&password=${login.password}`
      )
      .pipe(
        map((res) => {
          if (!res.length) {
            return throwError('Wrong email or password');
          }

          return res[0];
        })
      );
  }
}
