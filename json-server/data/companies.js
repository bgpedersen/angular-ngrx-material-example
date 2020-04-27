var faker = require('faker');
var generateEmployees = require('./employees');

module.exports = function (amount) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      image: faker.image.business(),
      title: faker.company.companyName(),
      phrase: faker.company.catchPhrase(),
      Employees: generateEmployees(faker.random.number(20), id),
    };
    entities.push(entity);
  }

  return entities;
};
