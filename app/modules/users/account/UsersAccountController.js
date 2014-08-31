'use strict';

function UsersAccountCtrl($rootScope, $scope, user) {
	$scope.user = user;
}

UsersAccountCtrl.$inject = ['$rootScope', '$scope', 'user'];
module.exports = UsersAccountCtrl;