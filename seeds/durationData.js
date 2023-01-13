const { Duration } = require('../models/Duration');

const durationdata = [
  {
    gymAttendance: 'yes',
    date: 'Monday',
    workoutTime: '180 min',
  },
  {
    gymAttendance: 'no',
    date: 'Tuesday',
    workoutTime: '0',
  },
  {
    gymAttendance: 'yes',
    date: 'Wednesday',
    workoutTime: '150 min',
  },
  {
    gymAttendance: 'yes',
    date: 'Thursday',
    workoutTime: '60 min',
  },
];

const seedDuration = () => Duration.bulkCreate(durationdata);

module.exports = seedDuration;