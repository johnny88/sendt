'use strict';

angular.module('sendtApp')
  .controller('ContactsCtrl', function ($scope, $location, Contact, socket) {
    $scope.contacts = Contact.query(function(contacts) {
   		socket.syncContacts('contact', $scope.contacts);
    });

    $scope.addContact = function() {
    	if ($scope.email.length === 0) { return; } 
    	Contact.add({ _id: $scope.email }, function(err) {
          console.log(err);
        });
    };

    $scope.openConversation = function(contactId) {
    	$location.path('/conversation/' + contactId);
    };
  });
