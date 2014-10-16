'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, Conversation, Message, Auth) {
  	// Add the conversations to the view
    $scope.conversations = Conversation.query();
    //$scope.messages = Message.query();
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.loadMessages = function(conversation) {
    	var messages = Message.get({ id: conversation._id });
    	$scope.messages = messages;
    };
  
  });
