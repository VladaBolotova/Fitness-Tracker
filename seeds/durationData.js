const { Duration } = require('../models');

const durationdata = [
  {
    workout_id: 1,
    date: '03/04/2022',
    workout_time: '180',
  },
  {
    workout_id: 2,
    date: '05/04/2022',
    workout_time: '50',
  },
  {
    workout_id: 3,
    date: '04/08/2022',
    workout_time: '150',
  },
  {
    workout_id: 4,
    date: '12/11/2022',
    workout_time: '60',
  },
];

const seedDuration = () => Duration.bulkCreate(durationdata);

module.exports = seedDuration;