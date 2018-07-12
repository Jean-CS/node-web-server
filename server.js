const express = require('express');
const hbs = require('hbs');

const app = express();

// tell express to use the Handlebars (hbs) view engine
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to my basic webpage!'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});