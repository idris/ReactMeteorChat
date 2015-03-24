Messages = new Meteor.Collection('messages');

if (Meteor.isServer) {
  Messages._ensureIndex({ date: -1 });
}
