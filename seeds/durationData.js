const { Duration } = require('../models');

const durationdata = [
  {
    gymAttendance: '',
    date: '',
    workoutTime: '',
  },
  {
    gymAttendance: '',
    date: '',
    workoutTime: '',
  },
  {
    gymAttendance: '',
    date: '',
    workoutTime: '',
  },
  {
    gymAttendance: '',
    date: '',
    workoutTime: '',
  },
];

const seedDuration = () => Duration.bulkCreate(durationdata);

module.exports = seedDuration;