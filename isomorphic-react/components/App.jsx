var React = require('react'); // require react
var Favorites  = require('./Favorites.jsx');

var App = React.createClass({
  render: function() {
    return <div>
    <h1>Hello</h1>
    <Favorites />
    </div>;
  }
});

module.exports = App;