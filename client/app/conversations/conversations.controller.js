'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, $routeParams, Conversation, Auth) {
    console.log($routeParams.id)
    $scope.messages = Conversation.get({id: $routeParams.id});
  });
