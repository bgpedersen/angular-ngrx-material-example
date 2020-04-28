import { createReducer } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

export const authFeatureKey = 'auth';

export interface State {
  currentUser: User;
  isLoggedIn: boolean;
}

export const initialState: State = {
  currentUser: null,
  isLoggedIn: false,
};

export const reducer = createReducer(initialState);
