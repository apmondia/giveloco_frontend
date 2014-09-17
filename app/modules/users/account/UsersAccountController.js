'use strict';

function UsersAccountCtrl($rootScope, $scope, user) {
	$scope.user = $scope.currentUser;
}

UsersAccountCtrl.$inject = ['$rootScope', '$scope', 'user'];
module.exports = UsersAccountCtrl;