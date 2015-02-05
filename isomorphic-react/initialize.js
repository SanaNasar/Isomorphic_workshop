var React = require("react");
var Favorites = require('./Favorites.jsx');


var App = require('./components/App.jsx');
  render: function() {
    return (
      <div>
        <h1>Hello</h1>
        <Favorites favorites={this.props.favorites} />
      </div>
    )
  }

React.render(App(), document.body);