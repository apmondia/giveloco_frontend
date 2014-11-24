/*jshint camelcase: false */
'use strict';

function UsersAccountHistoryCtrl($rootScope, $scope) {

// =======================================================================
//	View Configurations
// =======================================================================
	// Current User Role...
	$scope.currentUserRoleIs = function(userRole) {
		return ($scope.currentUser.role === userRole) ? true : false;
	};

	// From User Role...
	$scope.fromUserRoleIs = function(t, userRole) {
		return (t.from_user_role === userRole) ? true : false;
	};
	$scope.fromUserRoleIsNot = function(t, userRole) {
		return (t.from_user_role !== userRole) ? true : false;
	};

	// To User Role...
	$scope.toUserRoleIs = function(t, userRole) {
		return (t.to_user_role === userRole) ? true : false;
	};
	$scope.toUserRoleIsNot = function(t, userRole) {
		return (t.to_user_role !== userRole) ? true : false;
	};

	// Transaction Type...
	$scope.transTypeIs = function(t, transType) {
		return (t.trans_type === transType) ? true : false;
	};
	$scope.transTypeIsNot = function(t, transType) {
		return (t.trans_type !== transType) ? true : false;
	};
}

UsersAccountHistoryCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountHistoryCtrl;
