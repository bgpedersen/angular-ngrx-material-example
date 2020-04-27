var generateImages = require('./images');
var faker = require('faker');

module.exports = function (amount) {
  var entities = [];

  for (var id = 1; id <= amount; id++) {
    let entity = {
      id: id,
      title: faker.lorem.sentence(),
      Images: generateImages(faker.random.number(20), id),
    };
    entities.push(entity);
  }

  return entities;
};

// Update readme with better examples
// make more endpoints with more use of https://github.com/marak/Faker.js/ test in https://codesandbox.io/s/busy-northcutt-8d1p6?file=/src/index.js
// use more of https://github.com/typicode/json-server like https etc.
