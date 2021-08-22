const router = require('express').Router();
const { User, Building, Department, Employee, Floor, Space } = require('../models');
const withAuth = require('../utils/auth');

// HOME ROUTE
// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Home route to Employee List.
router.get('/employees', withAuth, async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      include: [
        {
          model: Department,
          attributes: ['department_name'],
        },
      ]
    });

    const employees = employeeData.map((emp) => emp.get({ plain: true }));

    // DEBUG: To see what is in [employees].
    console.log(employees);

    res.render('employeelist', {
      employees,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
});

// Home route to Employee Detail. Will get Space content
router.get('/employee-detail/:id', withAuth, async (req, res) => {
  try {
    const employeeDetailData = await Space.findOne({
      where: { employee_id: req.params.id }, include: [{
        model: Employee
      }, {
        model: Department
      }, {
        model: Floor
      }]
    })

    const employeeDetail = employeeDetailData.get({ plain: true });

    // DEBUG: To see what is in [employees].
    console.log(employeeDetail);

    const buildingData = await Building.findByPk(employeeDetail.floor.building_id)

    const building = buildingData.get({ plain: true });

    // DEBUG: To see what is in [employees].
    console.log(building);
    console.log({
      ...employeeDetail,
      ...building,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });

    res.render('employeedetail', {
      ...employeeDetail,
      ...building,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
});

// Home route to Department List.
router.get('/departments', withAuth, async (req, res) => {
  try {
    const departmentData = await Department.findAll();

    const departments = departmentData.map((dept) => dept.get({ plain: true }));

    // DEBUG: To see what is in [departments].
    console.log(departments);

    res.render('departmentlist', {
      departments,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Home route to Department Detail.
router.get('/department-detail/:id', withAuth, async (req, res) => {
  try {
    const departmentData = await Department.findByPk(req.params.id);
    const employeeData = await Employee.findAll({ where: {department_id: req.params.id}});

    const department = departmentData.get({ plain: true});
    const employees = employeeData.map((emp) => emp.get({ plain: true }));

    // DEBUG: To see what is in [employees].
    console.log({
      department,
      employees,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });

    res.render('departmentdetail', {
      department,
      employees,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
});

// SIGNUP ROUTE
router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
})

// LOGIN ROUTE
router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
