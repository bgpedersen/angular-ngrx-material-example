import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

export const createUser = createAction(
  '[RegisterPage] Create User',
  props<User>()
);

export const createUserSuccess = createAction(
  '[RegisterPage] Create User Success',
  props<{ data: any }>()
);

export const createUserFailure = createAction(
  '[RegisterPage] Create User Failure',
  props<{ error: any }>()
);
