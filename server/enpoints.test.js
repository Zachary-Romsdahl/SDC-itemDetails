const supertest = require('supertest');

const app = require('./index.js'); // Link to your server file
const request = supertest(app);

describe('Gets the test endpoint to /itemDetails/:productId', () => {
  test('It should response the GET method with item name', () => {
    // Sends GET Request to /test endpoint
    request.get('/itemDetails/1')
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.itemName).toBe('Intelligent Granite Pizza');
        done();
      });
  })
})

