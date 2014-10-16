'use strict';

angular.module('sendtApp')
  .controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'http://placehold.it/900x500',
        text: 'placeholder'
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  });