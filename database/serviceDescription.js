const mongoose = require('mongoose');
const db = require('./index.js');
const { productDetails } = require('./seed.js')

const productSchema = mongoose.Schema({
  // TODO: your schema here!
  productId: { type: Number, unique: true },
  itemName: String,
  options: { size: [String], color: [String]},
  materials: String,
  itemDescription: String
});

let Description = mongoose.model('Description', productSchema);

Description.deleteMany({})
  .then(() => {
    Description.create(productDetails())
  })



module.exports.Description = Description;

