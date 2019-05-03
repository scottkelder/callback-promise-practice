const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser());
app.use(cors());

app.get('/todos', (req, res) => {
  res.send('Made it to the todos endpoint with a GET request');
})

app.post('/todos', (req, res) => {
  console.log(req.body);
  res.status(201).send('Made it there');
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
});