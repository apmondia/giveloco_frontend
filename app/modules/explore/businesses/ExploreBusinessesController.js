'use strict';

function ExploreBusinessesCtrl($rootScope, $scope, $timeout, User) {

	$scope.businesses = User.getAllUsersOfType('business');

/* =======================================================================
	Pagination
======================================================================= */
	$timeout (function() {
		$scope.totalItems = $scope.businesses.length;

		$scope.pageCount = function () {
			return Math.ceil($scope.businesses.length / $scope.itemsPerPage);
		};

		$scope.$watch('currentPage + itemsPerPage', function() {
			var begin = (($scope.currentPage - 1) * $scope.itemsPerPage), 
				end = begin + $scope.itemsPerPage;

			$scope.filteredItems = $scope.businesses.slice(begin, end);
		});
	}, 250);
}

ExploreBusinessesCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'User'];
module.exports = ExploreBusinessesCtrl;