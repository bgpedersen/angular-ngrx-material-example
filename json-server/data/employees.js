var faker = require('faker');

module.exports = function (amount, companyId) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      avatar: faker.image.avatar(),
    };
    if (companyId) entity.companyId = companyId;
    Object.assign(entity, faker.helpers.createCard());
    entities.push(entity);
  }

  return entities;
};
