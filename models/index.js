const User = require('./User');
const Building = require('./Building');
const Floor = require('./Floor');
const Space = require('./Space');
const Department = require('./Department');
const Employee = require('./Employee');

// RELATIONSHIPS
Building.hasMany(Floor, {
  foreignKey: 'building_id',
  onDelete: 'CASCADE'
});

Floor.belongsTo(Building, {
  foreignKey: 'building_id',
});

Floor.hasMany(Space, {
  foreignKey: 'floor_id',
});

Space.belongsTo(Floor, {
  foreignKey: 'floor_id',
  onDelete: 'CASCADE',
});

Space.belongsTo(Department, {
  foreignKey: 'department_id',
});

Space.belongsTo(Employee, {
  foreignKey: 'employee_id',
});

Department.hasMany(Employee, {
  foreignKey: 'department_id',
});

Department.hasMany(Space, {
  foreignKey: 'department_id',
  onDelete: 'SET NULL',
});

Employee.hasOne(Space, {
  foreignKey: 'employee_id',
});

Employee.belongsTo(Department, {
  foreignKey: 'department_id',
});

module.exports = { User, Building, Floor, Space, Department, Employee };
