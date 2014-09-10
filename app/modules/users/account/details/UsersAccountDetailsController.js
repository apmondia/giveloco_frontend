'use strict';

function UsersAccountDetailsCtrl($rootScope, $scope) {

	$scope.userRoleIsNot = function(userRole) {
		return ($scope.currentUser.role !== userRole) ? true : false;
	};

	$scope.userRoleIs = function(userRole) {
		return ($scope.currentUser.role === userRole) ? true : false;
	};
}

UsersAccountDetailsCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountDetailsCtrl;