const router = require('express').Router();
const {User, Workout } = require('../../models');



// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name:req.body.last_name,
      password: req.body.password,
    });
    console.log(dbUserData);

    req.session.save(() => {
      req.session.userId=dbUserData.id;
      req.session.email=dbUserData.email;
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/diagram-data', async (req, res) => {
  

  const workoutHistory = await Workout.findAll({
    where:{ user_id: req.session.userId},
  })
  
  res.json(workoutHistory);
})

// amount of time user spends (duration)
router.get('/workout', async (req, res) => {
  console.log(req.session);
  const workoutHistory = await Workout.findAll({
    where:{ user_id: req.session.user_id}
  })
res.json(workoutHistory);
})

// Login
router.post('/login', async (req, res) => {
  console.log('auto')
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
console.log(dbUserData);
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).redirect('/');
    });
  } else {
    res.status(404).redirect('/');
  }
});

module.exports = router;