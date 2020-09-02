const mongoose = require('mongoose');
const db = require('./index.js');
<<<<<<< HEAD
const { productDetails } = require('./seed.js');
=======
>>>>>>> 4e5c6e8fc88569e1c56c42f14497ec2b2ca11311

const productSchema = mongoose.Schema({
  // TODO: your schema here!
  productId: { type: Number, unique: true },
  itemName: String,
  options: { size: [String], color: [String] },
  materials: String,
  itemDescription: String,
});

const Description = mongoose.model('Description', productSchema);

<<<<<<< HEAD
Description.deleteMany({}).then(() => {
  Description.create(productDetails())
    .catch((err) => { console.log('Catch ERROR', err); });
});

module.exports = { Description: Description };
=======
module.exports = Description;
>>>>>>> 4e5c6e8fc88569e1c56c42f14497ec2b2ca11311
