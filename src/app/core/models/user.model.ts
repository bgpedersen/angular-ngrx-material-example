import * as faker from 'faker';

export class User {
  id: null | number;
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  color?: string;
  avatar?: string;

  constructor(parameters: User) {
    this.email = parameters.email;
    this.password = parameters.password;
    this.firstname = parameters.firstname || faker.name.firstName();
    this.lastname = parameters.lastname || faker.name.lastName();
    this.id = faker.random.number(999999);
    this.avatar = faker.image.avatar();
    this.color = faker.internet.color();
  }
}
