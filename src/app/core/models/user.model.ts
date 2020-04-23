export class User {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;

  constructor(parameters: User) {
    this.email = parameters.email;
    this.password = parameters.password;
    this.firstname = parameters.firstname;
    this.lastname = parameters.lastname;
  }
}
