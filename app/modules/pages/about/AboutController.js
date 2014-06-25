'use strict';

function AboutViewCtrl($rootScope, $scope) {
	$scope.testVar = 'This is the about page.';
}

AboutViewCtrl.$inject = ['$rootScope', '$scope'];
module.exports = AboutViewCtrl;