const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'descriptions',
  process.env.DB_HOST,
  process.env.DB_PASS,
  {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432',
  },
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection established with postgres');
  })
  .catch((error) => {
    console.log('Unable to Connect to postgres', error);
  });

module.exports = { sequelize, Sequelize };
