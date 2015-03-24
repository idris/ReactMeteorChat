MessageForm = React.createClass({
  setAuthor: function() {
//    userActions.setAuthor(React.findDOMNode(this).elements.author.value);
  },

  onChangeText: function(e) {
    this.setAuthor();
//    userActions.typing();
  },

  onSubmit: function(e) {
    e.preventDefault();
    var form = e.target;

    var data = {
      text: form.elements.text.value,
      author: form.elements.author.value
    };

    // trigger the action
    Meteor.call('sendMessage', data);

    // clear out the input
    form.elements.text.value = '';
  },

  render: function() {
    return <form onSubmit={this.onSubmit}>
      Author:<input name="author" onChange={this.onChangeAuthor} />
      <br />
      Message:<input name="text" onChange={this.onChangeText} />
      <button>Send message</button>
    </form>;
  }
});
