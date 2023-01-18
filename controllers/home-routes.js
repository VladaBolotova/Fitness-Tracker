const router = require('express').Router();
const { Workout, Duration } = require('../models');
const withAuth = require('../utils/auth');

// GET all workouts for homepage
router.get('/workout',withAuth, async (req, res) => {
  try {
    const dbWorkoutData = await Workout.findAll({
       user_id: req.session.user_id
    });

    const workout = dbWorkoutData.map((workout) =>
    workout.get({ plain: true })
    );

    res.render('workoutHistory', {
        workout,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one workout
router.get('/workout/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view 
    try {
      const dbWorkoutData = await Workout.findOne({ user_id: req.session.user_id, id: req.params.id}, {
        include: [
          {
            model: Duration,
            attributes: [
              'id',
              'gym_atandance',
              'workout_time',
            ],
          },
        ],
      });
      const workout = dbWorkoutData.get({ plain: true });
      res.render('workoutHistory', { workout, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one duration
router.get('/duration/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbDurationData = await Duration.findByPk(req.params.id);

      const duration = dbDurationData.get({ plain: true });

      res.render('workoutHistory', { duration, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('home', {
    login: req.session.loggedIn
  });
});

router.get('/diagram', (req,res) =>{
   if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('diagram', {
    login: req.session.loggedIn
  });
})

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('sign-up-page');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('log-in');
});


module.exports = router;