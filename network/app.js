const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  db: 'postgres',
  password: 'thepassword',
  port: 5432
});

client
  .connect()
  .then(() => {
    console.log('CLIENT CONNECTED');

    client.end();

    console.log('CLIENT DISCONNECTED');
  })
  .catch(() => {
    console.log('THERE WAS AN ERROR CONNECTION');
    client.end();
  });
