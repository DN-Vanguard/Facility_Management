const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model { }

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true
        },
        Department_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'department',
    }
);

module.exports = Department;