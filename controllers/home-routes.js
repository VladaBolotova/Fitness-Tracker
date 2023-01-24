const router = require('express').Router();
const { Workout, Duration } = require('../models');
const withAuth = require('../utils/auth');

// GET all workouts for homepage
router.get('/workout', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const workoutData = await Workout.findAll({
      where: { user_id: req.session.userId},
      include: [
        {
          model: Duration,
        },
      ],
    });

    // Serialize data so the template can read it
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('workoutHistory', { 
      workouts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
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

router.get('/addworkout', (req,res) =>{
  console.log(req.session)
  if (!req.session.loggedIn) {
   res.redirect('/');
   return;
 }

 res.render('addworkout', {
   login: req.session.loggedIn
 });
})

router.get('/dashboard', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const workoutData = await Workout.findAll({
      where: {user_id: req.session.userId},
      include: [
        {
          model: Duration,
        },
      ],
    });
    console.log(workoutData)
    // Serialize data so the template can read it
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      workouts, 
      logged_in: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
    res.redirect('/dashboard');
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