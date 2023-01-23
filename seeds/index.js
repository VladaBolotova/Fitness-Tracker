const sequelize = require('../config/connection');
const seedWorkout = require('./workoutData');
const seedDuration = require('./durationData');
const seedUsers = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: false });
  
  // await seedUsers();

  await seedWorkout();

  // await seedDuration();

 

  process.exit(0);
};

seedAll();