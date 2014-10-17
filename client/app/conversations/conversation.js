'use strict';

angular.module('sendtApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/conversation/:id', {
        templateUrl: 'app/conversations/conversation.html',
        controller: 'ConversationsCtrl'
      });
  });
