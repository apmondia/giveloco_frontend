'use strict';

function ExploreBusinessesCtrl($scope, $state) {
  if ($state.params['reset']) {
    $state.search = "";
  }
}

ExploreBusinessesCtrl.$inject = ['$scope', '$state'];
module.exports = ExploreBusinessesCtrl;
