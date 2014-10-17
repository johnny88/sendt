'use strict';

angular.module('sendtApp')
  .controller('HomeCtrl', function ($scope, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;
  });
