const router = require('express').Router();
const { Employee } = require('../../models');
const withAuth = require('../../utils/auth');

// UPDATE EMPLOYEE 
router.put("/:id", withAuth, async (req, res) => {
    try {
        const employeeData = await Employee.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
  
        if (!employeeData) {
            res.status(404).json({ message: "No employee found with this ID."});
            return;
        }
  
        res.status(200).json(employeeData);
    } catch (err) {
        res.status(500).json(err);
    }
  })

// DELETE (TBD)
router.delete('/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.destroy({
            where: {
                id: req.params.id
            }
        });
        //console.log(`\n EMPLOYEE ID: ${req.params.id} HAS BEEN DELETED \n`);
        res.status(200).json(deletedEmployee);
    }
    catch (err) {
        res.status(500).json(err);
        if (err) {
            console.error(err);
        }
    }
});

module.exports = router;


