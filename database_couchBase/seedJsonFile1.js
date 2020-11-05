const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('./mock_data/10millionRecords1.json');

const colorLimit = () => {
  const color = [];
  for (let i = 0; i < 5; i += 1) {
    color.push(faker.commerce.color());
  }
  return color;
};

function sendToFile(num) {
  const idStart = num * 100000;
  for (let i = idStart; i < idStart + 100000; i += 1) {
    const product = {
      product_id: i,
      item_name: faker.lorem.sentence(),
      size: ['Small', 'Large', 'Medium'],
      color: colorLimit(),
      materials: faker.lorem.sentences(5).toLowerCase(),
      item_description: faker.lorem.sentences(15),
    };
    writeStream.write(`${JSON.stringify(product)},\r\n`);
    console.log(i);
  }
}

const drainStream = new Promise((resolve, reject) => {
  try {
    writeStream.once('drain', () => {
      console.log('all good');
      resolve();
    });
  } catch (err) {
    reject(err);
  }
});

async function loop() {
  const start = Date.now();
  writeStream.write('[\r\n');
  for (let loops = 0; loops < 50; loops += 1) {
    sendToFile(loops);
    // eslint-disable-next-line no-await-in-loop
    await drainStream;
    console.log('in loop');
  }
  writeStream.write(']\r\n');
  writeStream.end();
  console.log('End of the line', Date.now() - start);
}

loop();
