require(__dirname + '/../../app/js/entry');
require('angular-mocks');

describe('ninja controller', function() {
  var $httpBackend;
  var $ControllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('NinjaApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var controller = $ControllerConstructor('NinjasController', {$scope: $scope});
    expect(typeof $scope).toBe('object');
    expect(typeof controller).toBe('object');
    expect(Array.isArray($scope.ninjas)).toBe(true);
  });

  describe('REST request functions', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_, $rootScope) {
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
      $ControllerConstructor('NinjasController', {$scope: $scope});
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should add an array to ninjas with a GET all', function() {
      $httpBackend.expectGET('/api/ninja').respond(200, [{_id: 1, name: 'test ninja'}]);
      $scope.getAll();
      $httpBackend.flush();
      expect($scope.ninjas[0].name).toBe('test ninja');
    });

    it('should not be able to create a new ninja', function() {
      $httpBackend.expectPOST('/api/ninja', {name: 'test ninja'}).respond(200, {name: 'a different ninja'});
      expect($scope.ninjas.length).toBe(0);
      $scope.newNinja = {name: 'test ninja'};
      $scope.create($scope.newNinja);
      $httpBackend.flush();
      expect($scope.newNinja).toBeNull();
    });
  });
});
