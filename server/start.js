require('newrelic');
const app = require('./index');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
