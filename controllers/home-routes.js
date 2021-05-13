const router = require('express').Router();
const { User } = require('../Models');

router.get('/', async (req, res) => {
    console.log("General Kenobi")
    // const userList = await User.findAll().catch
    // ((err) => {
    //     res.json(err);
    // })
    //     const users = userList.map((user) =>
    //     user.get({ plain: true }));
        res.render('homepage');
});

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('login');
});

module.exports = router;