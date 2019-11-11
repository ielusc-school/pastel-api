const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send({ message: 'hello pastel'});
});

app.listen(port, (error) => {
  if(error) {
    console.log(`Server down is error, because ${error}`);
  } else {
    console.log(`Server up is http://localhost:${port}`);
  }
});