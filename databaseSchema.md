Service Plan for [TODO: service name here]
Service Owner: Valeriia Ten
What are your service's inputs and outputs (API Spec)?
Define all the API endpoints that will be used to consume and publish data. What is the shape of the data (i.e. list all the properties and types) for each API endpoint and/or message?

API endpoints: GET/POST /buybox
Shape of data: nested array

Data Schema
How will your data be stored? What DBMS do you plan to use and why? If you are using a SQL database, what is the schema for this data (create an ER diagram)? It is useful to think about the organization of your data in a DMBS even if you are using a noSQL datastore. In that case describe the shape of the data for all collections you plan to use.
[TODO E-R diagram or other description of the schema]

1 Collection Name : buy box
let repoSchema = mongoose.Schema({
 // TODO: your schema here!
id: Number,
sellerName: String,
totalOfSales: String,
starNumbers: String,
productName: String,
marketabilityOfTheProduct: String
price: Number
inStock: String
description: String
estimated delivery: Number
ready to ship in: String
from: String
cost to ship: Number
});

2 Collection Name: dropdown box
let repoSchema = mongoose.Schema({
	size: String
color: String
style: String
})

3 Collection Name: deliver to
let repoSchema = mongoose.Schema({
	country: Sytring,
zip code: Number
})
MongoDB: In MongoDB, data is stored in JSON-like documents that can have varied structures. To improve query speed, MongoDB can store related data together, which is accessed using the MongoDB query language. MongoDB is schema-free, allowing you to create documents without having to define the structure of the document first. These documents can be easily changed by adding or deleting fields.
If we talk about applications where MongoDB is used, and what they focus on — this is a very fast development. Because everything can be constantly changed, you don't need to constantly worry about the strict format of the document.
This also raises the question of the app's lifetime. With MongoDB, it is good to make applications that have a very limited life cycle. That is, if we make an app that doesn't last long, for example, a website to launch a movie or an Olympics. We lived a few months after that, and this app is almost not used. If the app lives longer, then there is another question.
