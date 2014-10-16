'use strict';

angular.module('sendtApp')
  .factory('Conversation', function ($resource) {
    return $resource('/api/conversations/:id/', {
      id: '@_id'
    },
    {
      // Custom methods go here
    });
  });
