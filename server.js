const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

// if env variable does not exist, default to 3000
const port = process.env.PORT || 3000;

const app = express();

// tell handlebars to use partials
hbs.registerPartials(__dirname + '/views/partials');

// tell express to use the Handlebars (hbs) view engine
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });

  // if next(); is not called, nothing else will be executed
  next();
});

// // nothing else beyond this middleware will be executed,since 'next()' is not called
// app.use((req, res, next) => {
//  res.render('maintenance.hbs');
//});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home',
    welcomeMessage: 'Welcome to my basic webpage!'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});