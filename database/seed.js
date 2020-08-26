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
      itemName: faker.commerce.productName(),
      options: {
        size: ['Small', 'Large', 'Medium'],
        color: colorLimit(),
      },
      materials: faker.lorem.sentence(),
      itemDescription: faker.lorem.sentences(8),
    });
  }
  return data;
}
// console.log('test', seed());

module.exports.productDetails = productDetails;


