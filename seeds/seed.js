const sequelize = require('../config/connection');
const { User, Building, Department, Employee, Floor, Space } = require('../models');

const userData = require('./userData.json');
const buildingData = require('./buildingData.json');
const departmentData = require('./departmentData.json');
const employeeData = require('./employeeData.json');
const floorData = require('./floorData.json');
const spaceData = require('./spaceData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const building of buildingData) {
    await Building.create({
      ...building
    });
  }

  for (const department of departmentData) {
    await Department.create({
      ...department
    });
  }

  for (const employee of employeeData) {
    await Employee.create({
      ...employee
    });
  }

  for (const floor of floorData) {
    await Floor.create({
      ...floor
    });
  }
  
  for (const space of spaceData) {
    await Space.create({
      ...space
    });
  }

  process.exit(0);
};

seedDatabase();
