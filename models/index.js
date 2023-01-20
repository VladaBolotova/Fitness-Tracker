const Duration = require('./Duration');
const User = require('./Users');
const Workout = require('./Workouts');


User.hasMany(Workout, {
    foreignKey: 'user_id',
});

Workout.belongsTo(User, {
    foreignKey: 'user_id',
});

Duration.belongsTo(Workout, {
    foreignKey: 'workout_id',
})

Workout.hasMany(Duration, {
    foreignKey: 'workout_id',
})

<<<<<<< HEAD
module.exports={Duration,User,Workout};
=======
module.exports = {Duration, User, Workout};
>>>>>>> main
