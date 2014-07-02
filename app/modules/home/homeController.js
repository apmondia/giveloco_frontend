'use strict';
// Controller naming conventions should start with an uppercase letter
function HomeViewCtrl($rootScope, $scope, $location, $anchorScroll) {

	$scope.scrollToTarget = function (target){
		$location.hash(target);
		$anchorScroll();
	};
	
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
HomeViewCtrl.$inject = ['$rootScope', '$scope', '$location', '$anchorScroll'];
module.exports = HomeViewCtrl;