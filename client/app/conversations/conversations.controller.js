'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, $routeParams, Conversation, Message, Auth, socket) {
    console.log($routeParams.id)
    $scope.messages = Message.query({id: $routeParams.id});

    $scope.conversations = Conversation.query();
    $scope.getCurrentUser = Auth.getCurrentUser;
    var active_conversation = null;
    $scope.sendMessage = function(form) {
      if ($scope.message.length === 0) { return; }
      if ($routeParams.id === null) { return; }

      var msg = new Message();
      msg.conversation = $routeParams.id;
      msg.message = {
        text: $scope.message
      };
      Message.save(msg);
      socket.syncUpdates('message', $scope.messages);

      // Reset the form
      $scope.message = ""
      
    };
  });
