var React = require("react"); // require React 
var Favorites = require('./Favorites.jsx'); // require Favorites


var App = require('./components/App.jsx');
  render: function() {
    return (
      <div>
        <h1>Hello</h1>
        <Favorites favorites={this.props.favorites} />
      </div>
    )
  };

React.render(App(), document.body);