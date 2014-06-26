'use strict';

function ExploreCausesCtrl($rootScope, $scope) {
	$scope.causeList = 'List of Causes goes here.';
}

ExploreCausesCtrl.$inject = ['$rootScope', '$scope'];
module.exports = ExploreCausesCtrl;