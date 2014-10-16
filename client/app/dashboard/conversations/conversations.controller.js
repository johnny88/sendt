'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, Conversation, Message, Auth, socket) {
  	// Add the conversations to the view
    $scope.conversations = Conversation.query();
    $scope.getCurrentUser = Auth.getCurrentUser;
    var conversationsss = null;

    $scope.loadMessages = function(conversation) {
    	$scope.messages = Message.query({ id: conversation._id });
        socket.syncUpdates('message', $scope.messages);
    	conversationsss = conversation;
    };

    $scope.sendMessage = function() {
    	console.log(conversationsss)
    	var msg = new Message();
    	msg.conversation = conversationsss._id;
    	msg.message = {
    		text: $scope.message
    	};
    	Message.save(msg);
    };
  
  });
