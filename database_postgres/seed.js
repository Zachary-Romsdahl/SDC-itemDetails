const Description = require('./descriptions.js');
const faker = require('faker');

const colorLimit = () => {
  const color = [];
  for (let i = 0; i < 5; i += 1) {
    color.push(faker.commerce.color());
  }
  return color;
};

function productDetails(num) {
  const idStart = num * 10000;
  const data = [];
  for (let i = idStart; i < (idStart + 10000); i += 1) {
    data.push({
      // product_id: i,
      item_name: faker.lorem.sentence(),
      size: ['Small', 'Large', 'Medium'],
      color: colorLimit(),
      materials: faker.lorem.sentences(5).toLowerCase(),
      item_description: faker.lorem.sentences(15),
    });
  }
  console.log(data.length);
  return data;
}

async function pushDataIntoDB() {
  for (let i = 0; i < 1000; i += 1) {
    const items = productDetails(i);
    console.log('Begin insertion', i);
    await Description.bulkCreate(items);
    console.log('After Insertion', i);
  }
}

Description.sync({ force: true })
  .then((res) => {
    console.log('synced', res);

    // Description.destroy({ truncate: true }).then(() => {
    //   console.log('deleted');
    // const batch = Description.initializeOrderedBulkOp();
    const start = Date.now();
    pushDataIntoDB()
      .then(() => {
        console.log('All Done getting data');
        const timeElapsed = Date.now() - start;
        console.log('Time to seed 10 million:', timeElapsed);
      })
      .catch((err) => {
        console.log('error 48', err);
      });
  })
  .catch((err) => {
    console.log('error syncing:', err);
  });
