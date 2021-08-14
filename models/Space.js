const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Space extends Model { }

Space.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        seat_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        department_id: {
            type: DataTypes.INTEGER,
            refrences:{
                model: "department",
                key:"id"
            }
        },
        employee_id: {
            type: DataTypes.INTEGER,
            refrences:{
                model: "employee",
                key:"id"
            }
        },
        floor_id: {
            type: DataTypes.INTEGER,
            refrences:{
                model: "floor",
                key:"id"
            }
        },        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "space",
    }
);

module.exports = Space;