const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log('Connected successfully to MongoDB');
  const db = client.db('mydatabase');
  // Add your MongoDB code here

  return 'done';
}

main().then(console.log).catch(console.error).finally(() => client.close());
