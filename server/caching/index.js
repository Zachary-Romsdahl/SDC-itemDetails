require('dotenv').config();
const redis = require('redis');

const { CACHE_HOST, CACHE_PORT } = process.env;

const RedisClient = redis.createClient(CACHE_PORT, CACHE_HOST);

RedisClient.on('error', (err) => {
  console.log('Redis:', err);
});

RedisClient.on('connect', () => {
  console.log('Redis Client Connected');
});

exports.get = (req, res, next) => {
  const id = req.params.productId;
  RedisClient.get(id, (err, data) => {
    if (err) {
      console.log('Error fetching from Cache:', err);
      next();
    }
    if (data === null) next();
    else res.send(data);
  });
};

exports.set = (id, data) => {
  RedisClient.set(id, data);
};

exports.update = (id, newData) => {
  RedisClient.get(id, (err, oldData) => {
    if (err) {
      console.log('Error fetching from Cache:', err);
    } else if (oldData !== null) {
      exports.set(id, newData);
    } else {
      console.log('Nothing to update in Cache');
    }
  });
};

exports.delete = (id) => {
  RedisClient.del(id, (err, response) => {
    if (err) {
      console.log('Error deleting in Cache:', err);
    }
    if (response === 1) {
      console.log(`ProductID ${id} successfully removed from cache`);
    } else {
      console.log(`Couldn't delete productID: ${id} from cache`);
    }
  });
};
