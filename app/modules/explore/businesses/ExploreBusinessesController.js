'use strict';

function ExploreBusinessesCtrl($scope) {
  $scope.$on('$stateChangeStart', function () {
    $scope.search = "";
  });
}

ExploreBusinessesCtrl.$inject = ['$scope'];
module.exports = ExploreBusinessesCtrl;
