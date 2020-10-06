const Description = require('../../database/serviceDescription.js');

exports.item_details_read = (req, res) => {
  const id = req.params.productId;
  Description.find({ productId: id }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
};

// Creates a new product and sets that product's id to largest productId + 1
exports.item_details_create = (req, res) => {
  const product = req.body;
  Description
    .find({})
    .sort({ productId: -1 })
    .limit(1)
    .then((largestProductId) => {
      const { productId } = largestProductId[0];
      product.productId = productId + 1;
      Description.create(product)
        .then((document) => {
          console.log(`Successfully posted document ${document} to Descriptions collection`);
          res.send(document).status(200);
        })
        .catch((err) => {
          console.log('Error uploading product to Database:', err);
          res.send(err).status(500);
        });
    })
    .catch((err) => {
      console.log('Error sorting through Descriptions collection:', err);
      res.send(err).status(500);
    });
};

// Updates the current product and returns an error if it doesn't exist
exports.item_details_update = (req, res) => {
  const id = req.params.productId;
  const newData = req.body;
  Description.updateOne({ productId: id }, newData)
    .then((response) => {
      console.log(response);
      res.send('Successfully updated product').status(200);
    })
    .catch((err) => {
      console.log('Error:', err);
      res.send(err).status(500);
    });
};

exports.item_details_delete = (req, res) => {
  const id = req.params.productId;
  Description.deleteOne({ productId: id })
    .then((response) => {
      console.log(response);
      res.send(response).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send(err).status(500);
    });
};
