const router = require('express').Router();
const userRoutes = require('./userRoutes');
const groupRoutes = require('./groupRoutes');
const comments = require('./comments');

router.use('/users', userRoutes);
router.use('/groups', groupRoutes);
router.use('/comments', comments);

module.exports = router;