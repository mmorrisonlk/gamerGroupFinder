const router = require('express').Router();
const { Group, User } = require('../Models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        // const userData = await User.findAll({
        //     attributes: { exclude: ['password'] },
        //     order: [['name', 'ASC']],
        //   });
      
        //   const users = userData.map((project) => project.get({ plain: true }));
          res.render('homepage')
        //   res.render('homepage', {
        //     users,
        //     // Pass the logged in flag to the template
        //     logged_in: req.session.logged_in,
        //   });
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        console.log("req.session.loggedIn", req.session.loggedIn)
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;