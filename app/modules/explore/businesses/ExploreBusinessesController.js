'use strict';

function ExploreBusinessesCtrl($rootScope, $scope) {
	$scope.bizList = 'List of Businesses goes here.';
}

ExploreBusinessesCtrl.$inject = ['$rootScope', '$scope'];
module.exports = ExploreBusinessesCtrl;