require('node-jsx').install({extensions: ['.jsx']});

var express = require("express");
var morgan = require('morgan');
var React = require('react');
var App = React.createFactory(require('./components/App.jsx'));
var engine = require('ejs-locals');

var app = express();
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('layout', 'layout.ejs');



app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

var favorites = [
  'beer',
  'choco'
  ];

app.use(function(req, res, next){
  var html = React.renderToString(App());

  res.render('main', {body:html});
});

app.listen(process.env.PORT || 3030);