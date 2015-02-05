'use strict';

function ExploreCausesCtrl($scope, $state) {
  if ($state.params['reset']) {
    $state.search = "";
  }
}

ExploreCausesCtrl.$inject = ['$scope', '$state'];
module.exports = ExploreCausesCtrl;
