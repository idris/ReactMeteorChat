Message = React.createClass({
  propTypes: {
    author: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    me: React.PropTypes.bool,
    sent: React.PropTypes.bool
  },

  render: function() {
    var classes;
    if (this.props.me && !this.props.sent) {
      classes = 'unsent'
    }

    return <div className={classes}>
      <strong><span>{this.props.author}</span><span>{this.props.sent}</span></strong>:
      <span>{this.props.text}</span>
    </div>
  }
});
