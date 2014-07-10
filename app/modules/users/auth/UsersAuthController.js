'use strict';

function UsersAuthCtrl($rootScope, $scope) {
	$scope.test = null;
}

UsersAuthCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthCtrl;