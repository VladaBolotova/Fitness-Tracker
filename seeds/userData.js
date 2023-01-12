const { User } = require('../models');

const userdata = [
  {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;