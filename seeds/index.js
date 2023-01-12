const sequelize = require('../config/connection');
const seedWorkout = require('.workoutData.js');
const seedDuration = require('.DurationData.js');
const seedUsers = require('./UserData.js')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedWorkout();

  await seedDuration();

  await seedUsers();

  process.exit(0);
};

seedAll();