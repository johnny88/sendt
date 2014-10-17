'use strict';

angular.module('sendtApp')
  .controller('ContactsCtrl', function ($scope, Contact, socket) {
    $scope.contacts = Contact.query(function(contacts) {
   		socket.syncUpdates('contact', $scope.contacts);
    });

    $scope.addContact = function() {
    	if ($scope.email.length === 0) { return; } 
    	Contact.add({ _id: $scope.email }, function(err) {
          console.log(err);
        });
    };
  });
