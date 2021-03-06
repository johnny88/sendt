'use strict';

angular.module('sendtApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, Modal) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.settings = function() {
      $scope.$root.$broadcast("settingsClick");
    };

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    if ($scope.isLoggedIn) {
      $scope.redirect_home = "/dashboard";
    } else {
      $scope.redirect_home = "/";
    }
  });