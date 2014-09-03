'use strict';

function UsersAccountDetailsCtrl($rootScope, $scope) {
	var user = $scope.user;

	$scope.updateUser = function(isValid) {
		if (isValid) {
			$scope.showLoader = true;
			// Auth.signup($scope.user).then(success, error);
			console.log($scope.user);
		} else {

		}
	};
}

UsersAccountDetailsCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountDetailsCtrl;