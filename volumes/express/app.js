const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const message = process.env.MESSAGE || 'hello word';
app.get('/', (req, res) => res.send(`${message}`));
app.listen(port, () => console.log(`app listening on port ${port}`));
