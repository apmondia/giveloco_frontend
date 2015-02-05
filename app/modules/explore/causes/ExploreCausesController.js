'use strict';

function ExploreCausesCtrl($scope, $state) {
  /*
  $scope.$on('$stateChangeStart', function () {
    $scope.search = "";
  });
  $rootScope.$on('$stateChangeSuccess' function () {
    console.debug("state chnage success");
  });
  */
  if ($state.params['reset']) {
    $state.search = "";
  }

}

ExploreCausesCtrl.$inject = ['$scope', '$state'];
module.exports = ExploreCausesCtrl;
