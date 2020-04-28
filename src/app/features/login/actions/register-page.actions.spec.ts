import * as fromRegisterPage from './register-page.actions';

describe('createUser', () => {
  it('should return an action', () => {
    expect(fromRegisterPage.createUser().type).toBe(
      '[RegisterPage] Create User'
    );
  });
});
