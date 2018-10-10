const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const message = process.env.MESSAGE || 'hello word';
const { appendFile } = require('fs');
const { promisify } = require('util');
const appendFileAsync = promisify(appendFile);
app.get('/', (req, res) => res.send(`${message}`));
app.listen(port, () => console.log(`app listening on port ${port}`));
setInterval(async () => {
  let date = new Date();
  await appendFileAsync('./logs/log.txt', `The datetime is now ${date}`);
  console.log('data written to file');
}, 1000);
