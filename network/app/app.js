const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres',
  password: 'thepassword',
  port: 5432
});

client
  .connect()
  .then(() => {
    console.log('CLIENT CONNECTED');
    console.log('CLOSING CONNECTION');

    client.end();
    console.log('CLIENT DISCONNECTED');
  })
  .catch(err => {
    console.log(err);
    console.log('THERE WAS AN ERROR CONNECTION');
    client.end();
  });
