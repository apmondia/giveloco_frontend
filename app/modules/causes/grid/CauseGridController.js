'use strict';

function CauseGridCtrl($rootScope, $scope) {
	$scope.causeList = 'List of Causes goes here.';
}

CauseGridCtrl.$inject = ['$rootScope', '$scope'];
module.exports = CauseGridCtrl;