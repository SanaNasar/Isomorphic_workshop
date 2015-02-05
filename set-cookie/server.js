var express = require("express");
var setCookie = require('./');
var app = express();

app.use(function(req, res, next){
  //Set a cookie.
  setCookie('the_time', Date.now(), {res: res});
  res.send('<html><body>Hi</body></html>');
});

app.listen(process.env.PORT || 3030);