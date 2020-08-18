const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Successfully connected to DB!')
});

module.exports = db;