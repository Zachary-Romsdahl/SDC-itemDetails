# Item Details Service for E-Commerce Application
<img width="550" alt="105924480-2fe28c80-5ff3-11eb-8d11-26fe94d72a09" src="https://user-images.githubusercontent.com/61757668/111241541-9a0ebb00-85ba-11eb-8088-17192190b0c7.png">

Description: 
Inherited the item details service of an Etsy clone and architected the backend to handle up to 1800 clients/second with <1% error rate.

Backend Architecture developed on AWS:

![Screen Shot 2021-03-15 at 6 14 41 PM](https://user-images.githubusercontent.com/61757668/111241422-51570200-85ba-11eb-8504-465c00ac2e3e.png)

Instructions:

Start server: npm run server-dev

Bundle files: npm run react-dev

Seed database: npm run db:setup

CRUD API

Create: API endpoint --> POST '/itemDetails/'. Creates a new product with the data that is sent through the body

Read: API endpoint --> GET '/itemDetails/${productID}'. fetches the product corresponding to the productID in the parameters

Update: API endpoint --> PUT '/itemDetails/${productID}'. The product with the productID sent in the parameters will update to the data sent in the body

Delete: API endpoint --> DELETE '/itemDetails/${productID}'. Deletes the product with the productID
