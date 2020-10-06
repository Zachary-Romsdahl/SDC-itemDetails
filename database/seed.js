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
  const idStart = num * 1000;
  const data = [];
  for (let i = idStart; i < idStart + 1000; i += 1) {
    console.log(i);
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
  for (let i = 0; i < 10000; i += 1) {
    const items = productDetails(i);
    await Description.create(items);
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
