const router = require('express').Router();
const {Duration, Workout } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const dbWorkoutData = await Workout.create({
        date: req.body.date,
        workout_time: req.body.workout_time,
        type: req.body.type,
        description: req.body.description,
        weight: req.body.weight,
        sets: req.body.sets,
        reps: req.body.reps,
        calories: req.body.calories,
        user_id: req.session.userId,
      });
      
      console.log(req.session.user_id)
      console.log(dbWorkoutData)
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbWorkoutData);
        // res.status(200).json(dbDurationData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const workoutData = await Workout.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });

      console.log(workoutData);
  
      if (!workoutData) {
        res.status(404).json({ message: 'No workout found with this id!' });
        return;
      }
  
      res.status(200).json(workoutData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const workoutData = await Workout.findAll({
        include: [
          {
            model: Duration,
          },
        ],
      });
  
      // Serialize data so the template can read it
      const workouts = workoutData.map((workout) => workout.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.json(workouts)
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Workout }],
      });
  
      const user = userData.get({ plain: true });
  
      res.json(user)
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
