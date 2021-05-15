const router = require('express').Router();
const { Group, User } = require('../Models');

router.get('/', async (req, res) => {
    try {
        // if(req.session.logged_in) {
            const groupData = await Group.findAll({
                include: [{ model: User }]
            });
            const groups = groupData.map((group) => group.get({ plain: true }));
            res.render('homepage', {
                groups,
                logged_in: req.session.logged_in
            });
        // }
        // else {
        //     res.render('landingpage');
        // }
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;