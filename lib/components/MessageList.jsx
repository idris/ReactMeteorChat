MessageList = React.createClass({
  propTypes: {
    messages: React.PropTypes.array.isRequired
  },

  componentDidUpdate: function() {
    App.scrollBottom();
  },

  render: function() {
    list = _.map(this.props.messages, function(message, i) {
      return <Message key={message._id} text={message.text} author={message.author} me={message.me} sent={message.sent} />;
    });

    return <div className="messages-wrapper">
      <div className="messages">
        {list}
      </div>
    </div>
  }
});
