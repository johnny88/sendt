'use strict';

angular.module('sendtApp')
  .controller('MessagesCtrl', function ($scope, Message) {
  	// Add the conversations to the view
    $scope.messages = Message.query();
  });
