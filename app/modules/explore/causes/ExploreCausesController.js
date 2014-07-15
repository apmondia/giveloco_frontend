'use strict';

function ExploreCausesCtrl($rootScope, $scope, $timeout, User) {

	$scope.causes = User.getAllUsersOfType('cause');

/* =======================================================================
	Pagination
======================================================================= */
	$scope.filteredCauses = [];
	$scope.currentPage = 1;
	$scope.itemsPerPage = 12;
	$scope.maxSize = 5;

	$timeout (function() {
		$scope.totalItems = $scope.causes.length;

		$scope.pageCount = function () {
			return Math.ceil($scope.causes.length / $scope.itemsPerPage);
		};

		$scope.pageChanged = function () {
			window.scrollTo(0,0);
		};

		$scope.$watch('currentPage + itemsPerPage', function() {
			var begin = (($scope.currentPage - 1) * $scope.itemsPerPage), 
				end = begin + $scope.itemsPerPage;

			$scope.filteredCauses = $scope.causes.slice(begin, end);
		});
	}, 250);

	$scope.$watchCollection('search', function() {
		$scope.currentPage = 1;
	});
}

ExploreCausesCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'User'];
module.exports = ExploreCausesCtrl;