'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, $routeParams, Conversation, Message, Auth) {
    console.log($routeParams.id)
    $scope.messages = Message.query({id: $routeParams.id});
  });
