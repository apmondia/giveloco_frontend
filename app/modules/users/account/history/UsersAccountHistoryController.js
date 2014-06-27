'use strict';

function UsersAccountHistoryCtrl($rootScope, $scope) {
	$scope.account = 'Account History goes here.';
}

UsersAccountHistoryCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountHistoryCtrl;