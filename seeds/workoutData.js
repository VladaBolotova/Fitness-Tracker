const { Workout } = require('../models');

const workoutdata = [
  {
    type: 'cardio',
    description: 'running',
    // reps: '',
    // set: '',
    // weight: '',
    calories: '200',
    user_id: '1'
  },
  {
    type: 'strength',
    description: 'back',
    reps: '4',
    set: '5',
    weight: '30',
    calories: '178',
    user_id: '1'
  },
  {
    type: 'cardio',
    description: 'swimming',
    // reps: '',
    // set: '',
    // weight: '',
    calories: '300',
    user_id: '1'
  },
  {
    type: 'strength',
    description: 'leg press',
    reps: '3',
    set: '4',
    weight: '70',
    calories: '154',
    user_id: '1'
  },
];

const seedWorkout = () => Workout.bulkCreate(workoutdata).then ((result) => {
  console.log(result)
}).catch ((err) => console.error(err))


module.exports = seedWorkout;
