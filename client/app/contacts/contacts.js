'use strict';

angular.module('sendtApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contacts', {
        templateUrl: 'app/contacts/contacts.html',
        controller: 'ContactsCtrl'
      });
  });
