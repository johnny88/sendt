'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, Conversation, Message, Auth) {
  	// Add the conversations to the view
    $scope.conversations = Conversation.query();
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.loadMessages = function(conversation) {
    	$scope.messages = Message.query({ id: conversation._id });
    };
  
  });
