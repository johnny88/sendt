'use strict';

angular.module('sendtApp')
  .factory('Conversation', function ($resource) {
    return $resource('/api/conversations/:id/:email', {
      id: '@_id'
    },
    {
      findWithParticipant: {
        method: 'GET',
        params: {
          email: 'email'
        }
      }
    });
  }).factory('Message', function ($resource) {
    return $resource('/api/messages/:id/', {
      id: '@_id'
    },
    {
      // Custom methods go here
    });
	});