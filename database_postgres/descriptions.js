const { sequelize, Sequelize } = require('./index.js');

const description = sequelize.define('descriptions', {
  product_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  item_name: {
    type: Sequelize.STRING(500),
  },
  size: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  color: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  materials: {
    type: Sequelize.STRING(1000),
  },
  item_description: {
    type: Sequelize.STRING(2000),
  },
}, {
  timestamps: false,
});

async function syncDescription() {
  await description.sync();
  console.log('Synced in await funct');
}

syncDescription();

description.sync()
  .then((res) => {
    console.log('synced', res);
  })
  .catch((err) => {
    console.log('error syncing:', err);
  });

module.exports = description;
