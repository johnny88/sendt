'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, Conversation, Message, Auth) {
  	// Add the conversations to the view
    $scope.conversations = Conversation.query();
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.inSettings = false;

    $scope.$on("settingsClick", function (event, args) {
	   $scope.inSettings = true;
	});

    $scope.closeSettings = function() {
    	$scope.inSettings = false;
    };

    $scope.loadMessages = function(conversation) {
    	$scope.messages = Message.query({ id: conversation._id });
    };
  
  });
