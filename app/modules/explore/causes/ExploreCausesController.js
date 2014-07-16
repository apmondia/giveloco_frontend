'use strict';

function ExploreCausesCtrl($rootScope, $scope, $timeout, User) {

	$scope.causes = User.getAllUsersOfType('cause');

/* =======================================================================
	Pagination
======================================================================= */
	$timeout (function() {
		$scope.totalItems = $scope.causes.length;

		$scope.pageCount = function () {
			return Math.ceil($scope.causes.length / $scope.itemsPerPage);
		};

		$scope.$watch('currentPage + itemsPerPage', function() {
			var begin = (($scope.currentPage - 1) * $scope.itemsPerPage), 
				end = begin + $scope.itemsPerPage;

			$scope.filteredItems = $scope.causes.slice(begin, end);
		});
	}, 250);
}

ExploreCausesCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'User'];
module.exports = ExploreCausesCtrl;