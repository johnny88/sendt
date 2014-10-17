'use strict';

angular.module('sendtApp')
  .controller('ConversationsCtrl', function ($scope, $routeParams, Conversation, Message, Auth, $http, $location) {
    console.log($routeParams.id)

    Conversation.get({id: $routeParams.id}, function(convo) {
    	$scope.messages = Message.query({id: convo._id});
    });


    // // $http.get('/api/conversations/' + $routeParams.id + '/user')
    // // 	.success(function(conversation) {
    // // 		console.log(conversation)
    // // 		$location.path('/conversation/' + conversation._id);
    // // 	})
    // // 	.error(function(data, status, headers, config) {
    // // 		// Create a conversation
		  // //   $scope.messages = Message.query({id: $routeParams.id});
		  // // });

    // //Try to find a conversation with this user
    // Conversation.findWithParticipant({id: $routeParams.id}, function(conversation) {
    // 	console.log("Sdsdsd")
	   //  if (conversation) {
	   //  	console.log("conversation")
	   //  	$scope.messages = Message.query({id: conversation._id});
	   //  } else {
	   //  	console.log("crap")
	   //  	$scope.messages = Message.query({id: $routeParams.id});
	   //  }
    // });
    
  });
