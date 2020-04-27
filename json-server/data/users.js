var faker = require('faker');
var generatePosts = require('./posts');

module.exports = function (amount) {
  var entities = [];

  let entity = {
    id: 999999,
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    username: faker.internet.userName(),
    email: 'a@a.dk',
    password: '1234',
    color: faker.commerce.color(),
    avatar: faker.image.avatar(),
    Posts: generatePosts(faker.random.number(10), id),
  };
  entities.push(entity);

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      color: faker.commerce.color(),
      avatar: faker.image.avatar(),
      Posts: generatePosts(faker.random.number(10), id),
    };
    entities.push(entity);
  }

  return entities;
};
