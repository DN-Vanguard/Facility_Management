const User = require('./User');
const Building = require('./Building');
const Floor = require('./Floor');
const Space = require('./Space');
const Department = require('./Department');
const Employee = require('./Employee');

Floor.belongsTo(Building, {
  foreignKey: 'building_id',
});

Building.hasMany(Floor, {
  foreignKey: 'building_id',
  onDelete: 'CASCADE',
});

Space.belongsTo(Floor,{
  foreignKey: 'floor_id',
});

Floor.hasMany(Space,{
  foreignKey: 'floor_id',
  onDelete: 'CASCADE',
});

Space.belongsTo(Department, {
  foreignKey: 'department_id',
});

Department.hasMany(Space, {
  foreignKey: 'department_id',
  onDelete: 'SET NULL',
});

Space.belongsTo(Employee, {
  foreignKey: 'employee_id',
});

Employee.hasOne(Space, {
  foreignKey: 'employee_id',

});

module.exports = { User, Building, Floor, Space, Department, Employee };
