'use strict';

function ExploreCausesCtrl($rootScope, $scope, User) {
	$scope.users = User.getAllUsers();
}

ExploreCausesCtrl.$inject = ['$rootScope', '$scope', 'User'];
module.exports = ExploreCausesCtrl;