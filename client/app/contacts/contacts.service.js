'use strict';

angular.module('sendtApp')
  .factory('Contact', function ($resource) {
    return $resource('/api/sontact/:id/', {
      id: '@_id'
    },
    {
      // Custom methods go here
    });
  })