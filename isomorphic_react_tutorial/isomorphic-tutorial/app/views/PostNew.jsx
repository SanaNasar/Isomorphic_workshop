var React = require('react');
var apiClient = require('../api_client');

var PostsNew = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>New Post</h1>
        <input ref="title" placeholder="Title" />
        <input ref="title" placeholder="Author" />
        <textarea ref="body" placeholder="Body"></textarea>
        <input type="submit" />
      </form>
    )

  },

  onSubmit: function(e) {
    e.preventDefault();
    var data = {
      title: this.refs.title.getDOMNode().value,
      author: this.refs.author.getDOMNode().value,
      body: this.refs.body.getDOMNode().value,
    };
    var router = this.props.router;
    apiClient.post('/posts.json', data, function(err, res){
      if(!res.ok) return alert(res.body.error);
      var post = res.body;
      router.setRoute('/posts/' + post.id);
    });
  }
});

module.exports = PostsNew;
