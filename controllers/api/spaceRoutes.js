const router = require('express').Router();
const { Space, Department, Floor, Building } = require('../../models');
const withAuth = require('../../utils/auth');

//GET
router.get('/', async (req, res) => {
  try {
    const spaceData = await Space.findAll({
      include: [
          { model: Department, attributes: ['department_name'] },
          { model: Floor, attributes: ["floor_level"] },
      ]
  });
    console.log('\n DISPLAYING ALL SPACES \n');
    res.status(200).json(spaceData);
  }
  catch (err) {
    res.status(500).json(err);
    if (err) {
      console.error(err);
    }
  }
});

//POST
router.post('/', async (req, res) => {
  try {
    const newSpace = await Space.create({
      ...req.body,
    });

    res.status(200).json(newSpace);
  } catch (err) {
    res.status(400).json(err);
    if (err) {
      console.error(err);
    }
  }
});


module.exports = router;
