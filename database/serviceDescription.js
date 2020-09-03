const mongoose = require('mongoose');
const db = require('./index.js');
const { productDetails } = require('./seed.js');

const productSchema = mongoose.Schema({
  // TODO: your schema here!
  productId: { type: Number, unique: true },
  itemName: String,
  options: { size: [String], color: [String] },
  materials: String,
  itemDescription: String,
});

const Description = mongoose.model('Description', productSchema);

Description.deleteMany({}).then(() => {
  Description.create(productDetails())
    .catch((err) => { console.log('Catch ERROR', err); });
});

module.exports = { Description: Description };
