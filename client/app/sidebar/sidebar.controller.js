'use strict';

angular.module('sendtApp')
  .controller('SidebarCtrl', function ($scope, $location, Conversation, Auth) {
    $scope.conversations = Conversation.query();
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.viewConversation = function(conversation) {
      $location.path('/conversation/' + conversation._id);
		};

		$scope.goToContacts = function() {
			$location.path('/contacts');
		};
	});
