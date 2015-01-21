'use strict';

function ExploreCtrl($scope, $stateParams) {

  $scope.search = $stateParams.q;

}

ExploreCtrl.$inject = ['$scope', '$stateParams'];
module.exports = ExploreCtrl;
