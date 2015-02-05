var cookie = require('cookie'); //access the dependencies
var setter = require('./lib/setter');

module.exports = function setCookie(name, value, options) { // exports a funxtion which takes in name, value and options
  var cookieStr = cookie.serialize(name, value, options);
  setter(cookieStr, options && options.res);
  // cookie.log(cookieStr);
};