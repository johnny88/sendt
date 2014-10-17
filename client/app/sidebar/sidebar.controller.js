'use strict';

angular.module('sendtApp')
  .controller('SidebarCtrl', function ($scope, $location, Conversation, Auth, socket) {
    $scope.conversations = Conversation.query();
    $scope.getCurrentUser = Auth.getCurrentUser;
    
    //socket.syncUpdates('conversation', $scope.conversations);
    // socket.socket.on('conversation:save', function (user) {
    //   if (user._id === Auth.getCurrentUser()._id) {
    //     $scope.conversations = user.conversations;
    //     console.log(user.conversations);
    //     console.log("conversation yay")
    //   } else {
    //      console.log("conversation nay")
    //   }
    // });

    $scope.viewConversation = function(conversation) {
      $location.path('/conversation/' + conversation._id);
		};

		$scope.goToContacts = function() {
			$location.path('/contacts');
		};
	});
