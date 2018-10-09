const { readFile } = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');
const readFileAsync = promisify(readFile);
setTimeout(() => {
  readFileAsync(resolve(__dirname, 'logs/log.txt'))
    .then(data => {
      console.log('read some data from the shared volume');
      console.log(data.toString());
    })
    .catch(err => console.log('failed to read the data'));
}, 5000);
