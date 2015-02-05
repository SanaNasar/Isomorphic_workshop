var _ = require('underscore'); // require underscore js

module.exports = function(str) {
  // return str.toUpperCase();
  return _.escape(str.toUpperCase());
};