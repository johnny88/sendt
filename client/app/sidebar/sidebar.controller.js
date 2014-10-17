'use strict';

angular.module('sendtApp')
  .controller('SidebarCtrl', function ($scope, $location, Conversation, Auth, socket) {
    $scope.conversations = Conversation.query();
    $scope.getCurrentUser = Auth.getCurrentUser;
    //socket.syncUpdates('conversation', $scope.conversations);

    $scope.viewConversation = function(conversation) {
      $location.path('/conversation/' + conversation._id);
		};

		$scope.goToContacts = function() {
			$location.path('/contacts');
		};
	});
