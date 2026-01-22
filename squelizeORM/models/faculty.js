const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect').sequelize;

const Faculty = sequelize.define(
  'Faculty',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    courses:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    department:{
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  },
);

// `sequelize.define` also returns the model
console.log(Faculty === sequelize.models.Faculty); // true

module.exports = Faculty;