const router = require('express').Router();
const { Employee, Department, Floor, Space } = require('../../models');
const withAuth = require('../../utils/auth');


// GET
// router.get('/', async (req, res) => {
//     try {
//         const employeeData = await Employee.findAll();
//         console.log('\n DISPLAYING ALL EMPLOYEES \n');
//         res.status(200).json(employeeData);
//     }
//     catch (err) {
//         res.status(500).json(err);
//         if (err) {
//             console.error(err);
//         }
//     }
// });

// POST
router.post('/', async (req, res) => {
    try {
        const EmployeeNew = await Employee.create(req.body);
        console.log(`\n EMPLOYEE ${req.body.first_name} ${req.body.last_name} ADDED \n`);
        res.status(200).json(EmployeeNew);
    }
    catch (err) {
        res.status(400).json(err);
        if (err) {
            console.error(err);
        }
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.destroy({
            where: {
                id: req.params.id
            }
        });
        console.log(`\n EMPLOYEE ID: ${req.params.id} HAS BEEN DELETED \n`);
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


