const { Sequelize } = require('sequelize'); 

const sequelize = new Sequelize('college', 'postgres', 'Iqra@1308', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  });

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { dbConnect, sequelize };
