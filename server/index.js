const express = require('express');
// const bodyParser = require('body-parser');
let app = express();



app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send("API is working properly");
});
// Step 1 - (Heroku) use avaliable port to run my aplication
let port = 5000;

app.listen(port, function () {
  console.log(`listening on port http://localhost:${port}`);
});

