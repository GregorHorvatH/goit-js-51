const express = require('express');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'Bobby', age: 15 },
  { id: 2, name: 'Peter', age: 20 },
  { id: 3, name: 'Chris', age: 25 },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('<h3>About</h3> <p>lorem ipsum dolor</p>');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
