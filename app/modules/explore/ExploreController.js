'use strict';

function ExploreCtrl($scope, $stateParams, $rootScope) {

  $scope.search = $stateParams.q;

}

ExploreCtrl.$inject = ['$scope', '$stateParams', '$rootScope'];
module.exports = ExploreCtrl;
