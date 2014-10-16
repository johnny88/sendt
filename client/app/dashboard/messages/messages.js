'use strict';

angular.module('sendtApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/messages', {
        templateUrl: 'app/dashboard/messages/messages.html',
        controller: 'MessagesCtrl'
      });
  });
