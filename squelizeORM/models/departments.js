const {Sequelize, DataTypes} = require('sequelize')
const sequelize  = require('../config/dbConnect').sequelize

const Departments = sequelize.define(
    'Departments',
    {
        DeptID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,

        },
        DeptName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        DeptHead:{
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

console.log(Departments === sequelize.models.Departments); // true

module.exports = Departments;