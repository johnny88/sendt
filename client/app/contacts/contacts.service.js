'use strict';

angular.module('sendtApp')
  .factory('Contact', function ($resource) {
    return $resource('/api/contacts/:id/:email', {
      id: '@_id'
    },
    {
      add: {
        method: 'PUT',
        params: {
          email: 'email'
        }
      }
    });
  })