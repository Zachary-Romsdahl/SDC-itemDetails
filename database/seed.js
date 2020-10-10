/* eslint-disable no-await-in-loop */
const faker = require('faker');
const Description = require('./serviceDescription.js');
const db = require('./index.js');

const colorLimit = () => {
  const color = [];
  for (let i = 0; i < 5; i += 1) {
    color.push(faker.commerce.color());
  }
  return color;
};

function productDetails(num) {
  const idStart = num * 100000;
  const data = [];
  for (let i = idStart; i < (idStart + 100000); i += 1) {
    data.push({
      productId: i,
      itemName: faker.lorem.sentence(),
      options: {
        size: ['Small', 'Large', 'Medium'],
        color: colorLimit(),
      },
      materials: faker.lorem.sentences(5).toLowerCase(),
      itemDescription: faker.lorem.sentences(20),
    });
  }
  return data;
}

async function pushDataIntoDB() {
  for (let i = 0; i < 100; i += 1) {
    const items = productDetails(i);
    console.log('Begin insertion', i);
    await Description.insertMany(items);
    console.log('After Insertion', i);
  }
}

Description.deleteMany({}).then(() => {
  console.log('deleted');
  // const batch = Description.initializeOrderedBulkOp();
  pushDataIntoDB()
    .then(() => {
      console.log('All Done getting data');
    })
    .catch((err) => {
      console.log('error', err);
    });
});
