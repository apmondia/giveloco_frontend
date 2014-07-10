'use strict';

function HomeViewCtrl($rootScope, $scope, $location, $anchorScroll) {

	$scope.scrollToTarget = function (target){
		$location.hash(target);
		$anchorScroll();
	};
	
}

HomeViewCtrl.$inject = ['$rootScope', '$scope', '$location', '$anchorScroll'];
module.exports = HomeViewCtrl;