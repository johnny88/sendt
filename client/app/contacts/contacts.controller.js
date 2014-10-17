'use strict';

angular.module('sendtApp')
  .controller('ContactsCtrl', function ($scope, $location, Contact, socket, Conversation, Auth, $http) {
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
      $http.get('/api/conversations/' + contactId + '/user')
        .success(function(conversationId) {
          $location.path('/conversation/' + conversationId);
        })
        .error(function() {
          var convo = new Conversation();
          convo.participants = [Auth.getCurrentUser()._id, contactId];
          convo.owner = Auth.getCurrentUser()._id;
          Conversation.save(convo, function(conversation) {
            $location.path('/conversation/' + conversation._id);
          });
        });
    };
  });
