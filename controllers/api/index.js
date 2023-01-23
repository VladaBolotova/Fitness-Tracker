const router = require('express').Router();

const userRoutes = require('./user-routes');
const workoutRoutes = require('./workout-routes');
const durationRoutes = require('./duration-routes');

router.use('/users', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/duration', durationRoutes);

module.exports = router;