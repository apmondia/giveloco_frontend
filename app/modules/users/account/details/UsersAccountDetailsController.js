/*jshint camelcase: false */
'use strict';

function UsersAccountDetailsCtrl($rootScope, $scope) {

	$scope.accountStatus = function() {
		if ($scope.currentUser.confirmed_at === null) {
			return 'unconfirmed';
		} else {
			return 'confirmed';
		}
	};
}

UsersAccountDetailsCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountDetailsCtrl;