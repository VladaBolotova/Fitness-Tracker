const router = require('express').Router();
const { Duration } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// GET all history
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 
                    'gym_atandance',
                    'workout_time',
                    ],  
                    include: [
                        {
                          model: User,
                          attributes: ['id']
                        },
                    ]        
    })
        .then(dbHistoryData => res.json(dbHistoryData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  
});

// GET a single date 
router.get('/:gym_atandance', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 
                'gym_atandance',
                'workout_time',
      ],
      include: [
        {
          model: User,
          attributes: ['id']
        },
        
      ]
    })
      .then(dbHistoryData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No date found' });
          return;
        }
        res.json(dbHistoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// creating a post
router.post('/', withAuth, (req, res) => {
    // create 1 post
    Post.create({ 
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err); 
        });
});



// update a workout time by date
router.put('/:gym_atandance', withAuth, (req, res) => {
    Post.update({
        workout_time: req.body.workout_time,
        
      },
      {
        where: {
          gym_atandance: req.params.gym_atandance
        }
    }).then(dbHistoryData => {
        if (!dbHistoryData) {
            res.status(404).json({ message: 'No workout time found with this date' });
            return;
        }
        res.json(dbHistoryData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



// delete a atandance date
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: '' });
            return;
        }
        res.json(dbHistoryData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;