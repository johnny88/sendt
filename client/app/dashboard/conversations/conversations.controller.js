'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, Conversation) {
    $scope.conversations = Conversation.query();
  });
