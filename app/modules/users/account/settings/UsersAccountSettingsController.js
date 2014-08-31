'use strict';

function UsersAccountSettingsCtrl($rootScope, $scope) {
	$scope.account = 'Basic User Account Settings goes here.';
}

UsersAccountSettingsCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountSettingsCtrl;