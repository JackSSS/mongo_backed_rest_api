module.exports = function(app) {
  app.controller('NinjasController', ['$scope', '$http', function($scope, $http) {
    $scope.ninjas = [];
    $scope.errors = [];
    $scope.newNinja = null;

    $scope.getAll = function() {
      $http.get('/api/ninja')
        .then(function(res) {
          $scope.ninjas = res.data;
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.create = function(ninja) {
      $http.post('/api/ninja', ninja)
        .then(function(res) {
          $scope.ninjas.push(res.data);
          $scope.newNinja = null;
        }, function(err) {
          console.log(err.data)
        });
    };

    $scope.update = function(ninja) {
      ninja.editing = false;
      $http.put('/api/ninja/' + ninja._id, ninja)
        .then(function(res) {
          console.log('this ninja has a been modified');
        }, function(err) {
          $scope.errors.push('could not get ninja: ' + ninja.name + ' to dojo');
          console.log(err.data);
        });
    };

    $scope.remove = function(ninja) {
      $scope.ninjas.splice($scope.ninjas.indexOf(ninja), 1);
      $http.delete('/api/ninja/' + ninja._id)
        .then(function(res) {
          console.log('ninja deleted');
        }, function(err) {
          console.log(err.data);
          $scope.errors.push('could not delete ninja: ' + ninja.name);
          $scope.getAll();
        });
    };

    $scope.edit = function(ninja) {
      $scope.orig = angular.copy(ninja);
      ninja.editing = true;
    };

    $scope.cancelEdit = function(ninja) {
        angular.copy($scope.orig, ninja);
        ninja.editing = false;
    };
  }]);
};
