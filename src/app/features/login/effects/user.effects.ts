import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';
import * as RegisterPageActions from '../actions/register-page.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegisterPageActions.createUser),
      switchMap((user: User) =>
        this.userService.post(user).pipe(
          map((data: User) => RegisterPageActions.createUserSuccess({ data })),
          catchError((error) =>
            of(RegisterPageActions.createUserFailure({ error }))
          )
        )
      )
    );
  });

  createUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegisterPageActions.createUserSuccess),
        tap((data) => {
          console.log('success ', data);
          this.snackBar.open('Success! User created');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  createUserFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegisterPageActions.createUserFailure),
        tap((data) => {
          console.log('error ', data);
          this.snackBar.open('Error! User was not created!');
        })
      ),
    { dispatch: false }
  );
}
