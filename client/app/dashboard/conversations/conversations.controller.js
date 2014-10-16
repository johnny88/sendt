'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, Conversation, Message, Auth, socket) {
  	// Add the conversations to the view
    $scope.conversations = Conversation.query();
    $scope.getCurrentUser = Auth.getCurrentUser;
    var active_conversation = null;

    $scope.loadMessages = function(conversation) {
    	$scope.messages = Message.query({ id: conversation._id });
      socket.syncUpdates('message', $scope.messages);
    	active_conversation = conversation;
    };

    $scope.sendMessage = function() {
      if ($scope.message.length === 0) { return; }
      if (active_conversation === null) { return; }

    	var msg = new Message();
    	msg.conversation = active_conversation._id;
    	msg.message = {
    		text: $scope.message
    	};
    	Message.save(msg);

      // Reset the form
      $scope.message = ""
    };
  
  });
