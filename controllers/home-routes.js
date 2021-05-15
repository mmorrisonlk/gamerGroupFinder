const router = require('express').Router();
const { Group } = require('../Models');

router.get('/', async (req, res) => {
    const groupData = await Group.findAll().catch
    ((err) => {
        res.json(err);
        console.error(err);
    })
        const groups = groupData.map((group) =>
        group.get({ plain: true }));
        res.render('homepage', groups);
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;