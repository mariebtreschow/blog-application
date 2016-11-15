const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      morgan = require('morgan'),
      Sequelize = require('sequelize');

var app = express(),
    sequelize = new Sequelize('marietreschow', 'marietreschow', 'asta', { dialect: 'postgres' });

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));


app.use(methodOverride((req, res) => {
   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;
         delete req.body._method;
      return method;
   }})
);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
   res.render('index');
});

app.get('/admin/posts', (req, res) => {
   res.render('posts/index');
});

app.get('/admin/posts/new', (req, res) => {
   res.render('posts/new');
});

app.listen(3000, (req, res) => {
   console.log('App listening on 3000!');
});
