const router = require('express').Router();
const userRoutes = require('./userRoutes');
const groupRoutes = require('./groupRoutes');

router.use('/users', userRoutes);
router.use('/groupRoutes', groupRoutes);

module.exports = router;