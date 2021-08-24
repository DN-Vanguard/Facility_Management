const router = require('express').Router();
const { User, Building, Department, Employee, Floor, Space } = require('../models');
const withAuth = require('../utils/auth');

//HOMEPAGE
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

//EMPLOYEE LIST
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
    //console.log(employees);

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

//EMPLOYEE DETAIL
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
    //console.log(employeeDetail);

    const buildingData = await Building.findByPk(employeeDetail.floor.building_id)

    const building = buildingData.get({ plain: true });

    // DEBUG: To see what is in [employees].
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

//EDIT EMPLOYEE DETAILS
router.get('/employee-editor/:id', withAuth, async (req, res) => {
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
    // console.log(employeeDetail);

    const buildingData = await Building.findByPk(employeeDetail.floor.building_id)

    const building = buildingData.get({ plain: true });

    // DEBUG: To see what is in [employees].
    // console.log({
    //   ...employeeDetail,
    //   ...building,
    //   logged_in: req.session.logged_in,
    //   user_name: req.session.user_name
    // });

    res.render('employeedetailedit', {
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

//DEPARTMENT LIST
router.get('/departments', withAuth, async (req, res) => {
  try {
    const departmentData = await Department.findAll();

    const departments = departmentData.map((dept) => dept.get({ plain: true }));

    // DEBUG: To see what is in [departments].
    //console.log(departments);

    res.render('departmentlist', {
      departments,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//DEPARTMENT DETAIL
router.get('/department-detail/:id', withAuth, async (req, res) => {
  try {
    const departmentData = await Department.findByPk(req.params.id);
    const employeeData = await Employee.findAll({ where: { department_id: req.params.id } });

    const department = departmentData.get({ plain: true });
    const employees = employeeData.map((emp) => emp.get({ plain: true }));

    // DEBUG: To see what is in [renderdata].
    // console.log({
    //   department,
    //   employees,
    //   logged_in: req.session.logged_in,
    //   user_name: req.session.user_name
    // });

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

//FLOOR LIST
router.get('/floors', withAuth, async (req, res) => {
  try {
    const floorData = await Floor.findAll({
      include: [
        {
          model: Building,
          attributes: ['building_name'],
        },
      ]
    });

    const floors = floorData.map((flr) => flr.get({ plain: true }));

    // DEBUG: To see what is in [renderdata].
    // console.log({
    //   floors,
    //   logged_in: req.session.logged_in,
    //   user_name: req.session.user_name
    // });

    res.render('floorlist', {
      floors,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//FLOOR DETAILS
router.get('/floor-detail/:id', withAuth, async (req, res) => {
  try {
    const floorData = await Floor.findByPk(req.params.id, {
      attributes: { exclude: ['building_id'] },
      include: [{
        model: Building,
        attributes: ['building_name'],
      }]
    });

    const spaceDetailData = await Space.findAll({
      where: { floor_id: req.params.id }, include: [{
        model: Employee
      }, {
        model: Department
      }, {
        model: Floor
      }],
    })

    const floor = floorData.get({ plain: true });
    const spaceDetail = spaceDetailData.map((spc) => spc.get({ plain: true }));

    // DEBUG: To see what is in [renderdata].
    // console.log({
    //   spaceDetail,
    //   floor,
    //   logged_in: req.session.logged_in,
    //   user_name: req.session.user_name
    // });

    res.render('floordetail', {
      spaceDetail,
      floor,
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

//USER LIST
router.get('/users', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    const users = userData.map((user) => user.get({ plain: true }));

    // DEBUG: To see what is in [User].
    // console.log(users);

    res.render('userlist', {
      users,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//USER SIGN UP (CLICK USER MANAGEMENT)
router.get('/add-user', withAuth, async (req, res) => {
  try {
    res.render('signup', {
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//USER DETAIL
router.get('/user-detail/:id', withAuth, async (req, res) => {
  try {
    const userDetailData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
    });

    const userDetail = userDetailData.get({ plain: true });

    var isSameUser = false;
    if (req.params.id == req.session.user_id && req.session.user_name !== "Test") {
      isSameUser = true;
    };

    // DEBUG: To see what is in [user].
    // console.log({
    //   ...userDetail,
    //   renderEdit: isSameUser,
    //   logged_in: req.session.logged_in,
    //   user_name: req.session.user_name
    // });

    res.render('userdetail', {
      ...userDetail,
      renderEdit: isSameUser,
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

//EDIT USER DETAILS
router.get('/user-editor/:id', withAuth, async (req, res) => {
  try {
    const userDetailData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
    });

    const userDetail = userDetailData.get({ plain: true });

    // DEBUG: To see what is in [user].
    // console.log({
    //   ...userDetail,
    //   logged_in: req.session.logged_in,
    //   user_name: req.session.user_name
    // });

    res.render('userdetailedit', {
      ...userDetail,
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

//Initial test user creation.
router.get('/ocean', async (req, res) => {
  try {
    res.render('insidejob', {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN ROUTE
router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
