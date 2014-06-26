'use strict';

function AboutCtrl($rootScope, $scope) {
	$scope.testVar = 'This is the about page.';
}

AboutCtrl.$inject = ['$rootScope', '$scope'];
module.exports = AboutCtrl;