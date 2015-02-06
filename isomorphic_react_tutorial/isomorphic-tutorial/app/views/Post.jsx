var React = require('react'); // require react
var moment = require('moment'); // require moment
var Renderer = require('./Renderer.jsx'); // require renderer

var Post = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <small>Posted by {this.props.author} at {formatDate(this.props.created_at)}</small>
        <p>{this.props.body}</p>
        <Renderer renderer={this.props.renderer} />
      </div>
    );
  }
});

function formatDate(dateStr) {
  return moment(dateStr).format('LLLL');
}

module.exports = Post;
