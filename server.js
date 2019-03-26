const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 4444;

app.use(bodyParser.json({urlEncoded: false}));
app.use(express.static(path.join(__dirname, '/dist')));

//Create callback-based get/post routes here


//Create promisified get/post routes here


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})