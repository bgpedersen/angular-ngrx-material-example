var faker = require('faker');

module.exports = function (amount, userId) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      title: faker.lorem.sentence(),
      content: faker.lorem.sentences(),
      created: faker.date.recent(10),
      image: faker.image.image(),
      likes: faker.random.number(100),
    };
    if (userId) entity.userId = userId;
    entities.push(entity);
  }

  return entities;
};
