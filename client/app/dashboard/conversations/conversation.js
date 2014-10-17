'use strict';

angular.module('sendtApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/conversation/:id', {
        templateUrl: 'app/dashboard/conversations/conversation.html',
        controller: 'ConversationsCtrl'
      });
  });
