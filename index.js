'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/hello', (req, res) => {
  let name = req.params.name;
  res.status(200).send(`Hello ${name}`);
});


app.listen(PORT, () => console.log('Server Running on Port:', PORT));