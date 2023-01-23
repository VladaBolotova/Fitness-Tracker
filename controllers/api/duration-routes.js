const router = require('express').Router();
const {Duration} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const durationData = await Duration.create({
        date: req.body.date,
        workout_time: req.body.workoutTime,
      })

      console.log(durationData)
  
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(dbDurationData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;