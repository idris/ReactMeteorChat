Chat = ReactMeteor.createClass({
  templateName: 'ReactChat',

  startMeteorSubscriptions: function() {
    Meteor.subscribe('messages');
  },

  getMeteorState: function() {
    return {
      messages: Messages.find().fetch()
    }
  },

  render: function() {
    return <div>
      <MessageList messages={this.state.messages} />
      <MessageForm />
    </div>
  }
})
