const express = require('express');
const app = express();
const { resolve } = require('path');
const { promisify } = require('util');
const { readFile } = require('fs');
const readFileAsync = promisify(readFile);
const port = process.env.PORT || 3001;
const message = process.env.MESSAGE || 'hello word';
app.use(express.static(__dirname));
app.get('/', (req, res) => res.send(`${message}`));
app.get('/hello', async (req, res) => {
  const data = await readFileAsync(resolve(__dirname, 'hello.txt'));
  res.send(data.toString());
});
app.listen(port, () => console.log(`app listening on port ${port}`));
