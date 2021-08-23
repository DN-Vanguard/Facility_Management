const router = require('express').Router();
const userRoutes = require('./userRoutes');
const employeeRoutes = require('./employeeRoute');
const darkRoutes = require('./darkRoute');

router.use('/users', userRoutes);
router.use('/employees', employeeRoutes);
router.use('/dark', darkRoutes);

module.exports = router;
