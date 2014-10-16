'use strict';

angular.module('sendtApp')
  .factory('Conversation', function ($http, User, $cookieStore) {
    var currentUser = {};
    if ($cookieStore.get('token')) {
      currentUser = User.get();
    }

    return $resource('/api/conversations/:id/', {
      id: '@_id'
    },
    {
      // Custom methods go here
    });
  });
