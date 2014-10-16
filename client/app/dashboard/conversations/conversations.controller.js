'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, Conversation) {
  	// Add the conversations to the view
    $scope.conversations = Conversation.query();
  });
