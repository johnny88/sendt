'use strict';

angular.module('sendtApp')
  .controller('LayoutCtrl', function ($scope, $location, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser; 
  });
  