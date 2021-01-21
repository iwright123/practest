const express = require('express');
const path = require('path');

const frontEnd = path.join(__dirname, '..', 'client', 'dist');

const app = express();

app.use(express.static(frontEnd));



app.listen(3000, () => {
console.info('http://localhost:3000');
});