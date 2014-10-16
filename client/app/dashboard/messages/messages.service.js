'use strict';

angular.module('sendtApp')
  .factory('Message', function ($resource) {
    return $resource('/api/messages/:id/', {
      id: '@_id'
    },
    {
      // Custom methods go here
    });
  });
