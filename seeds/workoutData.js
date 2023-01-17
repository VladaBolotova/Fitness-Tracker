const { Workout } = require('../models/Workouts');

const workoutdata = [
  {
    type: 'cardio',
    description: 'running',
    reps: '',
    set: '',
    weight: '',
    calories: '200',
  },
  {
    type: 'strength',
    description: 'back',
    reps: '4',
    set: '5',
    weight: '30kg',
    calories: '178',
  },
  {
    type: 'cardio',
    description: 'swimming',
    reps: '',
    set: '',
    weight: '',
    calories: '300',
  },
  {
    type: 'strength',
    description: 'leg press',
    reps: '3',
    set: '4',
    weight: '70kg',
    calories: '154',
  },
];

const seedWorkout = () => Workout.bulkCreate(workoutdata).then ((result) => {
  console.log(result)
}).catch ((err) => console.error(err))


module.exports = seedWorkout;
