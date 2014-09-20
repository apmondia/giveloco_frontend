'use strict';

function UsersProfileBusinessCtrl($rootScope, $scope) {

	$scope.redeemCredits = function() {
		return ($scope.currentUser.role === 'individual' && $scope.currentUser.id !== $scope.user.id) ? true : false;
	};
}

UsersProfileBusinessCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersProfileBusinessCtrl;