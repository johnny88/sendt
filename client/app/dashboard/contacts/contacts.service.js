'use strict';

angular.module('sendtApp')
  .factory('Contact', function ($resource) {
    return $resource('/api/contacts/:id/', {
      id: '@_id'
    },
    {
      // Custom methods go here
    });
  });