const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'descriptions',
  'Romadom',
  'crmtb4p7md',
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
