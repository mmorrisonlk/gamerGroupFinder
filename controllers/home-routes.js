const router = require('express').Router();
// const { User } = require('../models');

router.get('/', async (req, res) => {
    console.log("General Kenobi")
    // const userList = await User.findAll().catch
    // ((err) => {
    //     res.json(err);
    // })
    //     const users = userList.map((user) =>
    //     user.get({ plain: true }));
    //     res.render('all', {users});
});

module.exports = router;