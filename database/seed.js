<<<<<<< HEAD
=======
const Description = require('./serviceDescription.js');
const db = require('./index.js');
>>>>>>> 4e5c6e8fc88569e1c56c42f14497ec2b2ca11311
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
<<<<<<< HEAD
      materials: faker.lorem.sentence(),
      itemDescription: faker.lorem.sentences(8),
=======
      materials: faker.lorem.sentences(5).toLowerCase(),
      itemDescription: faker.lorem.sentences(20),
>>>>>>> 4e5c6e8fc88569e1c56c42f14497ec2b2ca11311
    });
  }
  return data;
}
<<<<<<< HEAD
// console.log('test', seed());

module.exports.productDetails = productDetails;
=======

Description.deleteMany({}).then(() => {
  Description.create(productDetails())
    .catch((err) => { console.log('Catch ERROR', err); });
});


>>>>>>> 4e5c6e8fc88569e1c56c42f14497ec2b2ca11311


