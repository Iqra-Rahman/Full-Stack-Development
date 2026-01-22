const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_URL);

const Faculty = require("./faculty")(sequelize, DataTypes);
const Departments = require("./departments")(sequelize, DataTypes);

/* ✅ ASSOCIATIONS — write here */
Faculty.belongsTo(Departments, {
  foreignKey: "department",
  targetKey: "DeptName"
});

Departments.hasMany(Faculty, {
  foreignKey: "department",
  sourceKey: "DeptName"
});

module.exports = {
  sequelize,
  Faculty,
  Departments
};
