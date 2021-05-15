const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedGroups= require('./groupData');
const seedUsers = require('./userData');

const seedAll = async () => {
 try{ await sequelize.sync({ force: true });

   await seedUsers();

   await seedGroups();

  await seedComments();
 
 }
 catch(error){
   console.error(error)
 }
  process.exit(0);
};

seedAll();