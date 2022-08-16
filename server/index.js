const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const todos = [
  {
    text: 'винести сміття',
    isDone: true,
    date: 1660672680963,
    id: '3',
    deadline: null,
  },
  {
    text: 'оплатити інтернет',
    isDone: false,
    date: 1660672874639,
    id: '4',
    deadline: null,
  },
];

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.delete('/todos', (req, res) => {
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
