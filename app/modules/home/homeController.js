'use strict';
// Controller naming conventions should start with an uppercase letter
function HomeViewCtrl($rootScope, $scope) {
	$scope.testVar = 'The Home Page is up and running!';
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
HomeViewCtrl.$inject = ['$rootScope', '$scope'];
module.exports = HomeViewCtrl;