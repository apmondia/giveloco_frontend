'use strict';

function ExploreCtrl($scope, $stateParams) {

  $scope.search = $stateParams.q;
  $scope.$emit('refresh-all-users');

}

ExploreCtrl.$inject = ['$scope', '$stateParams'];
module.exports = ExploreCtrl;
