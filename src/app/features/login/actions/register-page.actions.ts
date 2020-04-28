import { createAction, props } from '@ngrx/store';

export const createUser = createAction('[RegisterPage] Create User');

export const createUserSuccess = createAction(
  '[RegisterPage] Create User Success',
  props<{ data: any }>()
);

export const createUserFailure = createAction(
  '[RegisterPage] Create User Failure',
  props<{ error: any }>()
);
