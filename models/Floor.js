const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Floor extends Model {}

Floor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        floor_level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        building_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'building',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'floor',
    });

    module.exports = Floor;