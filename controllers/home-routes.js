const router = require('express').Router();
const { Group, User, Comment } = require('../models');
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

router.get('/group/:id', withAuth, async (req, res) => {
    try{
        const group = await Group.findByPk(req.params.id, {
            include: [
                { model: User },
                {
                model: Comment, 
                include: [{
                    model:User
                }]
            }]
        });
        console.log("req.session.id", req.session.id)
        const project = group.get({ plain: true });
        res.render('singleGroup', {
            project,
            logged_in: req.session.logged_in
        });
    }
    catch (err){
        console.error(err)
        res.status(500).json(err)
    }
});

  router.get("/user-group", async (req,res) => {
    try{
     const groups = await Group.findAll({
        includes: [{ model: User }],
        where: {
            user_id: req.session.user_id
        }
    })
   const  groupList = groups.map((group) => {
       return group.get({ plain: true })
        
    })
    console.log(groupList)
    res.render('userList',{
      groupList,
      logged_in: req.session.logged_in
    })
    }
    catch(err){
      console.error(err)
      res.status(500).json(err)
    }
  })

router.get('/create', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] }
        });

        const user = userData.get({ plain: true });

        res.render('createGroup', {
        ...user,
        logged_in: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;