var React = require('react');

var Favorites = React.createClass({
  getInitailState: function(){
    return {
      favorites: [
        'pizza',
        'Game of Thrones',
        'Guitar',
        'Chocolate'
      ],
  };
},


  render: function() {
    return (
      <section>
        <h2>Favorites</h2>
        <form onSubmit={this.onSubmit}>
        <input ref="favorites" />
        </form>
      <ul>
        {this.state.favorites.map(function(favorite){
        return <li>{favorite}</li>;
        })}
      </ul>
      </section>
  );
},

onSubmit: function(e) {
  e.preventDefault();
  var value = this.refs.favorite.getDOMNode().value;
  var favorites = this.state.favorites.concat([value]);
  // console.log(value)

  this.setState({
    favorites: favorites,
  });
  },
});

module.exports = Favorites;