const Sequelize = require('sequelize');
require('dotenv').config();

const {
  DB_NAME, DB_USER, DB_HOST, DB_PASS, DB_PORT,
} = process.env;
console.log(DB_NAME, DB_USER, DB_HOST, DB_PASS, DB_PORT);

const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS,
  {
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT,
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
