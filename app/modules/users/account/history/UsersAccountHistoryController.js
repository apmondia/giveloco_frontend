/*jshint camelcase: false */
'use strict';

function UsersAccountHistoryCtrl($rootScope, $scope) {
	var t_created = $scope.transactions_created = $scope.currentUser.transactions_created;
	var t_accepted = $scope.transactions_accepted = $scope.currentUser.transactions_accepted;

	$scope.transactions = t_created.concat(t_accepted);
	
// =======================================================================
//	View Configurations
// =======================================================================
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

	// From and To User Role and Transaction Type
	$scope.fromUserRoleAndTransType = function(t, userRole, transType) {
		return ((t.from_user_role === userRole) && (t.trans_type === transType) && (t.from_user_id === $scope.currentUser.id)) ? true : false;
	};
	$scope.toUserRoleAndTransType = function(t, userRole, transType) {
		return ((t.to_user_role === userRole) && (t.trans_type === transType) && (t.to_user_id === $scope.currentUser.id)) ? true : false;
	};
}

UsersAccountHistoryCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountHistoryCtrl;