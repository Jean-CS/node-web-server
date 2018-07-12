const express = require('express');
const hbs = require('hbs');

const app = express();

// tell express to use the Handlebars (hbs) view engine
app.set('view engine', 'hbs');

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

app.get('/about', (req, res) => {
  res.render('about.hbs');
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});