function generateDB() {
  return {
    employees: require('./data/employees')(50),
    users: require('./data/users')(50),
    posts: require('./data/posts')(50),
    images: require('./data/images')(20),
    galleries: require('./data/galleries')(5),
    companies: require('./data/companies')(3),
  };
}
module.exports = generateDB;
