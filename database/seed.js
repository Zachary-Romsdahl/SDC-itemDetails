const Description = require('./serviceDescription.js');
const db = require('./index.js');
const faker = require('faker');

const colorLimit = () => {
  var color = [];
  for (var i = 1; i < 6; i++) {
    color.push(faker.commerce.color());
  }
  return color;
};

function productDetails() {
  var data = [];
  for (let i = 1; i < 101; i++) {
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

Description.deleteMany({}).then(() => {
  Description.create(productDetails())
    .catch((err) => { console.log('Catch ERROR', err); });
});




