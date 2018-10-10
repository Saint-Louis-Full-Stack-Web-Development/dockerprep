const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const message = process.env.MESSAGE || 'hello word';
const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);
app.get('/', (req, res) => res.send(`${message}`));
app.listen(port, () => console.log(`app listening on port ${port}`));
setTimeout(async () => {
  let data = await readFileAsync('./logs/log.txt');
  console.log('read some data from the shared volume');
  console.log(data);
}, 5000);
