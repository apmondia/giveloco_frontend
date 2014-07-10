'use strict';

function UsersProfileCtrl($rootScope, $scope, cause) {
	$scope.cause = cause;
}

UsersProfileCtrl.$inject = ['$rootScope', '$scope', 'cause'];
module.exports = UsersProfileCtrl;