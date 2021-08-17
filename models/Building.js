const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Building extends Model { }

Building.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        building_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        building_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        building_zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        facility_mgr_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'building',
    }
);

module.exports = Building;