const router = require('express').Router();
const { Group, User } = require('../Models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const groupData = await Group.findAll({
            include: [{ model: User }]
        });
        const groups = groupData.map((group) => group.get({ plain: true }));
        res.render('homepage', {
            groups,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        console.error(err);
        res.json(err);
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