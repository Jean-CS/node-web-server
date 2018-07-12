const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // content-type is set to 'text/html'
  // res.send('Hello Express!');

  // content-type is set to 'application/json'
  res.send({
    name: 'My name',
    likes: [
      'Surfing',
      'the',
      'interwebs'
    ]
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});