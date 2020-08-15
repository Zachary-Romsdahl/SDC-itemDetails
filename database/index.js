const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productDescription', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Successfully connected to DB!')
});

const productSchema = mongoose.Schema({
  // TODO: your schema here!
  productId: { type: Number, unique: true },
  itemName: String,
  options: { size: [String], color: [String], quantity: [Number] },
  materials: String,
  itemDescription: String
});

let Description = mongoose.model('Description', productSchema);

module.exports = Description;

