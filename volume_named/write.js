const { appendFile } = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');
const appendFileAsync = promisify(appendFile);
setInterval(async () => {
  let date = new Date();
  appendFileAsync(
    resolve(__dirname, 'logs/log.txt'),
    `The datetime is now ${date}`
  )
    .then(console.log('wrote some data to the shared volume'))
    .catch(err => console.log('writing to the file failed'));
}, 1000);
