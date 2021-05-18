const router = require('express').Router();
const { Group, User, Comment } = require('../Models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        if(req.session.logged_in) {
            const groupData = await Group.findAll({
                include: [{ model: User }]
            });
            const groups = groupData.map((group) => group.get({ plain: true }));
            res.render('homepage', {
                groups,
                logged_in: req.session.logged_in
            });
        }
        else {
            res.render('landingpage');
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        console.log("PrefindbyPK")
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: Group }]
        });
        console.log("userData", userData)
        const user = userData.get({ plain: true});

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/:id', withAuth, async (req, res) => {
    const userData = await Group.findByPk(req.session.id, {
        include: [{ model: Comment, 
        include:[{model:User }] }]

    });
})

module.exports = router;