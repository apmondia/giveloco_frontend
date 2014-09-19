'use strict';

function UsersAccountCtrl($rootScope, $scope) {
	$scope.user = $scope.currentUser;
}

UsersAccountCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountCtrl;