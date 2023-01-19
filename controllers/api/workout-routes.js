const router = require('express').Router();
const {Duration, Workout } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const dbWorkoutData = await Workout.create({
        workout: req.body.type,
        description: req.body.description,
        weight: req.body.weight,
        sets: req.body.sets,
        reps: req.body.reps,
      });
  
      const dbDurationData = await Duration.create({
        date: req.body.date,
        workout_time: req.body.workoutTime,
      })
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbWorkoutData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;