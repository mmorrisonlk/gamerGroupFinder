const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedGroups= require('./groupData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComments();
  
  await seedGroups();

  await seedUsers();

  process.exit(0);
};

seedAll();