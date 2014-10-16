'use strict';

angular.module('sendtApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });