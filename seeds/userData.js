const { User } = require('../models');

const userdata = [
  {
    email: 'rijan54791@usharer.com',
    first_name: 'Norman',
    last_name: 'Hughes',
    password: 'oCK688%X',
  },
  {
    email: 'alex56152@gmail.com',
    first_name: 'Alex',
    last_name: 'Simmons',
    password: '830eBNb!',
  },
  {
    email: 'cristiano743@gmail.com',
    first_name: 'Cristiano',
    last_name: 'Crawford',
    password: 'r8F#83KA',
  },
  {
    email: 'marvina54@gmail.com',
    first_name: 'Marvina',
    last_name: 'Woodward',
    password: '5B29Ilo*',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;