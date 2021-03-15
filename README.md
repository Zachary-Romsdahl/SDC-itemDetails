Item Details Service for E-Commerce Application

Start server: npm run server-dev
Bundle files: npm run react-dev
Seed database: npm run db:setup

CRUD API

Create: API endpoint --> POST '/itemDetails/'. Creates a new product with the data that is sent through the body

Read: API endpoint --> GET '/itemDetails/${productID}'. fetches the product corresponding to the productID in the parameters

Update: API endpoint --> PUT '/itemDetails/${productID}'. The product with the productID sent in the parameters will update to the data sent in the body

Delete: API endpoint --> DELETE '/itemDetails/${productID}'. Deletes the product with the productID
