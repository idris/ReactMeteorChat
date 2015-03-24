if (typeof App === 'undefined') App = {};

App.scrollBottom = function() {
  height = $('.messages').height()
  $('.messages-wrapper').animate({scrollTop: height})
}
