'use strict';
// require('dotenv').config();
const express = require('express');
const app = express();
// const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/hello/:name', (req, res) => {
  let name = req.params.name;
  res.status(200).send(`Hello ${name}`);
});


app.listen(8080, () => console.log('Server Running on Port:8080'));