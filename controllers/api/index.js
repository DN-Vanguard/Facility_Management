const router = require('express').Router();
const userRoutes = require('./userRoutes');
const departmentRoutes = require('./departmentRoutes');
const employeeRoutes = require('./employeeRoute');
const spaceRoutes = require('./spaceRoutes')

router.use('/users', userRoutes);
router.use('/departments', departmentRoutes);
router.use('/employees', employeeRoutes);
router.use('/spaces', spaceRoutes);

module.exports = router;
