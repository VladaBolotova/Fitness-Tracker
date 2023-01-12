const { Workout } = require('../models');

const workoutdata = [
  {
    type: '',
    description: '',
    reps: '',
    set: '',
    weight: '',
    calories: '',
  },
  {
    type: '',
    description: '',
    reps: '',
    set: '',
    weight: '',
    calories: '',
  },
  {
    type: '',
    description: '',
    reps: '',
    set: '',
    weight: '',
    calories: '',
  },
  {
    type: '',
    description: '',
    reps: '',
    set: '',
    weight: '',
    calories: '',
  },
];

const seedWorkout = () => Workout.bulkCreate(workoutdata);

module.exports = seedUser;
