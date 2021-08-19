const router = require('express').Router();
const { Department } = require('../../models');
const withAuth = require('../../utils/auth');


// GET
router.get('/', async (req, res) => {
  try {
      const departmentData = await Department.findAll();
      console.log('\n DISPLAYING ALL DEPARTMENTS \n');
      res.status(200).json(departmentData);
  }
  catch (err) {
      res.status(500).json(err);
      if (err) {
          console.error(err);
      }
  }
});

// POST
router.post('/', async (req, res) => {
    try {
      const newDepartment = await Department.create({
        ...req.body,
        user_id: req.session.user_id,
        
      });
  
      res.status(200).json(newDepartment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const departmentData = await Department.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!departmentData) {
        res.status(404).json({ message: 'No space found with this id' });
        return;
      }
  
      res.status(200).json(departmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  