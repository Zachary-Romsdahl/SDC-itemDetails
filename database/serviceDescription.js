const mongoose = require('mongoose');
const db = require('./index.js');

const productSchema = mongoose.Schema({
  // TODO: your schema here!
  productId: { type: Number, unique: true },
  itemName: String,
  options: { size: [String], color: [String] },
  materials: String,
  itemDescription: String,
});

const Description = mongoose.model('Description', productSchema);

module.exports = Description;
