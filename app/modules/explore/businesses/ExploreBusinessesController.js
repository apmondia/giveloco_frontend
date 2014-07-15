'use strict';

function ExploreBusinessesCtrl($rootScope, $scope, $timeout, User) {

	$scope.businesses = User.getAllUsersOfType('business');

/* =======================================================================
	Pagination
======================================================================= */
	$scope.filteredBusinesses = [];
	$scope.currentPage = 1;
	$scope.itemsPerPage = 12;
	$scope.maxSize = 5;

	$timeout (function() {
		$scope.totalItems = $scope.businesses.length;

		$scope.pageCount = function () {
			return Math.ceil($scope.businesses.length / $scope.itemsPerPage);
		};

		$scope.pageChanged = function () {
			window.scrollTo(0,0);
		};

		$scope.$watch('currentPage + itemsPerPage', function() {
			var begin = (($scope.currentPage - 1) * $scope.itemsPerPage), 
				end = begin + $scope.itemsPerPage;

			$scope.filteredBusinesses = $scope.businesses.slice(begin, end);
		});
	}, 250);

	$scope.$watchCollection('search', function() {
		$scope.currentPage = 1;
	});
}

ExploreBusinessesCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'User'];
module.exports = ExploreBusinessesCtrl;