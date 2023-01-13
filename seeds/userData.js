const { User } = require('../models/Users');

const userdata = [
  {
    email: 'rijan54791@usharer.com',
    firstName: 'Norman',
    lastName: 'Hughes',
    password: 'oCK688%X',
  },
  {
    email: 'alex56152@gmail.com',
    firstName: 'Alex',
    lastName: 'Simmons',
    password: '830eBNb!',
  },
  {
    email: 'cristiano743@gmail.com',
    firstName: 'Cristiano',
    lastName: 'Crawford',
    password: 'r8F#83KA',
  },
  {
    email: 'marvina54@gmail.com',
    firstName: 'Marvina',
    lastName: 'Woodward',
    password: '5B29Ilo*',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;