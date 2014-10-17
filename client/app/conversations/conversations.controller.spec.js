'use strict';

describe('Controller: ConversationsCtrl', function () {

  // load the controller's module
  beforeEach(module('sendtApp'));

  var ConversationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConversationsCtrl = $controller('ConversationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
