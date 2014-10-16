'use strict';

angular.module('sendtApp')
  .controller('ContactsCtrl', function ($scope, Contact) {
  	// Add the conversations to the view
    $scope.contacts = Contact.query();
  });
