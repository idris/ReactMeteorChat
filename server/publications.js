Meteor.publish('messages', function() {
  return Messages.find({}, { sort: { date: -1 } });
});
