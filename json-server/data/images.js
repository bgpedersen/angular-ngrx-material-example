var faker = require('faker');

module.exports = function (amount, galleryId) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      title: faker.lorem.sentence(),
      description: faker.lorem.sentences(),
      url: faker.image.image(),
    };
    if (galleryId) entity.galleryId = galleryId;
    entities.push(entity);
  }

  return entities;
};
