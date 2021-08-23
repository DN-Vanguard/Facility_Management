const router = require('express').Router();
const { Building, Department, Employee, Floor, Space } = require('../../models');

router.post('/building', async (req, res) => {
    try {
        const buildingData = await Building.bulkCreate(req.body);

        res.status(200).json(buildingData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/department', async (req, res) => {
    try {
        const departmentData = await Department.bulkCreate(req.body);
        
        res.status(200).json(departmentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/employee', async (req, res) => {
    try {
        const employeeData = await Employee.bulkCreate(req.body);
        
        res.status(200).json(employeeData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/floor', async (req, res) => {
    try {
        const floorData = await Floor.bulkCreate(req.body);
        
        res.status(200).json(floorData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/space', async (req, res) => {
    try {
        const spaceData = await Space.bulkCreate(req.body);
        
        res.status(200).json(spaceData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;